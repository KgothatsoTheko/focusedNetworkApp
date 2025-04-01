import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class WebRTCService {
  private socket: Socket;
  private localStream!: MediaStream;
  private peerConnections: { [key: string]: RTCPeerConnection } = {};
  private peerConnection1!: RTCPeerConnection;
  private attendeesCount = new BehaviorSubject<number>(0);
  private isMuted = new BehaviorSubject<boolean>(true);

  constructor() {
    // this.socket = io('http://localhost:8899'); // Update with your backend URL
    this.socket = io('https://focusnetworkserver.onrender.com');

    this.socket.on('unmute-response', (data) => {
      if (data.approved) {
        this.isMuted.next(false); // Unmute the user
      } else {
        this.isMuted.next(true) // Keep them muted
        console.log("Unmute request denied");
      }
    });

  }

  getResponse() {
    return this.isMuted.asObservable();
  }

  async requestMicrophonePermission() {
    if (Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === 'android') {
      try {
        const status = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (status) {
          console.log('Microphone permission granted.');
        }
      } catch (error) {
        console.error('Microphone permission denied:', error);
        throw error;
      }
    } else {
      console.log('Running on web; permissions not required.');
    }
  }

  async initializeLocalStream() {
    try {
      await this.requestMicrophonePermission();
      this.localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
      console.error('Error initializing local stream:', error);
      throw error;
    }
  }

  joinRoom(roomId: string) {
    this.socket.emit('join-room', roomId);

    this.socket.on('user-joined', (data) => {
      this.createOffer(data.id);
    });

    this.socket.on('signal', async (data) => {
      const pc = this.getPeerConnection(data.from);
      if (data.sdp) {
        await pc.setRemoteDescription(new RTCSessionDescription(data.sdp));
        if (data.sdp.type === 'offer') {
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          this.sendSignal(data.from, { sdp: pc.localDescription });
        }
      } else if (data.candidate) {
        await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
      }
    });

    this.socket.on('user-disconnected', (id) => {
      if (this.peerConnections[id]) {
        this.peerConnections[id].close();
        delete this.peerConnections[id];
      }
    });
  }

  requestUnmute(roomId: string) {
   this.socket.emit('request-unmute', roomId);
  
  this.socket.on('unmute-response', (data) => {
    if (data.approved) {
      this.isMuted.next(false); // Unmute user
    }
  });
  }

  private getPeerConnection(id: string): RTCPeerConnection {
    if (!this.peerConnections[id]) {
      const pc = new RTCPeerConnection();

      // Add local stream tracks
      if (this.localStream) {
        this.localStream.getTracks().forEach((track) => {
          pc.addTrack(track, this.localStream);
        });
      }

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          this.sendSignal(id, { candidate: event.candidate });
        }
      };

      pc.ontrack = (event) => {
        const remoteAudio = new Audio();
        remoteAudio.srcObject = event.streams[0];
        remoteAudio.play();
        // Handle receiving remote streams
        console.log('New track received:', event.streams[0]);
      };

      this.peerConnections[id] = pc;
    }
    return this.peerConnections[id];
  }

  private async createOffer(target: string) {
    const pc = this.getPeerConnection(target);
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    this.sendSignal(target, { sdp: pc.localDescription });
  }

  private sendSignal(target: string, data: any) {
    this.socket.emit('signal', { target, ...data });
  }

  muteAudio(mute: boolean) {
    if (!this.localStream) {
      console.error('Local stream is not available');
      return;
    }
    this.localStream.getAudioTracks().forEach((track) => {
      console.log(`Toggling mute: ${mute}, Track Enabled: ${track.enabled}`);
      track.enabled = !mute;
    });
  }

  notifyMuteState(roomId: string, isMuted: boolean) {
    this.socket.emit('mute-toggle', { roomId, isMuted });
}

  leaveRoom(roomId: string) {
    this.socket.emit('leave-room', roomId);
    if (this.localStream) {
      this.localStream.getTracks().forEach((track) => track.stop());
    }
    Object.values(this.peerConnections).forEach((pc) => pc.close());
    this.peerConnections = {};
  }

  initializePeerConnection() {
    this.peerConnection1 = new RTCPeerConnection();
    this.peerConnection1.ontrack = (event) => {
      const audio = new Audio();
      audio.srcObject = event.streams[0];
      audio.play();
    };
  }
}

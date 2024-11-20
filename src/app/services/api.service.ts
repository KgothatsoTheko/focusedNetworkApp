import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl = environment.nodeApiUrl

  constructor(private http: HttpClient) { }

  genericPost(enpoint:any, body:any) {
    return this.http.post(this.serverUrl + enpoint, body)
  }

  genericGet(endpoint:any){
    return this.http.get(this.serverUrl + endpoint)
  }
}

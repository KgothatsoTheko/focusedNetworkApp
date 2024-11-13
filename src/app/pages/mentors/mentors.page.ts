import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.page.html',
  styleUrls: ['./mentors.page.scss'],
})
export class MentorsPage implements OnInit {

  mentors!:any

  constructor(private storage: Storage, private api: ApiService) { }

  async ngOnInit() {
    this.api.genericGet('/mentors').subscribe(
      (res)=> {
        this.mentors = res
        console.log("All mentors", this.mentors);
      },
      (error) => {
        console.log("Something went wrong...", error);
        
      }
    )
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

}

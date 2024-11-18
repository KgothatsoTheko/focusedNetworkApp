import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nuggets',
  templateUrl: './nuggets.page.html',
  styleUrls: ['./nuggets.page.scss'],
})
export class NuggetsPage implements OnInit {
  galleryImages = [
    'https://focusednetwork.co.za/wp-content/uploads/2022/05/focusednetwork-2.jpg',
    'https://focusednetwork.co.za/wp-content/uploads/2019/01/g4.jpg',
    'https://focusednetwork.co.za/wp-content/uploads/2022/05/focusednetwork-3.jpg',
    'https://focusednetwork.co.za/wp-content/uploads/2019/01/g2.jpg',
    'https://focusednetwork.co.za/wp-content/uploads/2019/01/g1.jpg',
    'https://focusednetwork.co.za/wp-content/uploads/2022/05/focusednetwork-1.jpg'
  ];

  selectedSegment: string = 'first'; // Default segment

  information!:any

  constructor(private storage: Storage, private api: ApiService) { }

  async ngOnInit() {
    this.api.genericGet('information').subscribe(
      (res)=> {
        this.information = res
        console.log("All information", this.information);
      },
      (error) => {
        console.log("Something went wrong...", error);
        
      }
    )
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.api.genericGet('information').subscribe(
        (res)=> {
          this.information = res
          console.log("All information", this.information);
        },
        (error) => {
          console.log("Something went wrong...", error);
          
        }
      )
      event.target.complete();
    }, 2000);
  }


  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value; // Update selected segment
  }

}

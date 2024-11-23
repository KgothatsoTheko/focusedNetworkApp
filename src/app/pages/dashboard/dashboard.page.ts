import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  currentUser: any;
  greeting: string = 'Welcome';

  constructor(private storage: Storage) {}

  async ngOnInit() {
    // Initialize Ionic Storage
    await this.storage.create();
    // Retrieve user data from Ionic Storage
    this.currentUser = await this.storage.get('currentUser');

    if (this.currentUser?.data?.dateOfBirth) {
      this.checkBirthday(this.currentUser.data.dateOfBirth);
    }
  }

  // Method to check if today is the user's birthday
  checkBirthday(dateOfBirth: string) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    if (
      today.getDate() === birthDate.getDate() &&
      today.getMonth() === birthDate.getMonth()
    ) {
      this.greeting = 'Happy Birthday🎂'; // Update the greeting
    }
  }
}

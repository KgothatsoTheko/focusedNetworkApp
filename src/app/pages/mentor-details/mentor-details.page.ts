import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.page.html',
  styleUrls: ['./mentor-details.page.scss'],
})
export class MentorDetailsPage implements OnInit {
  mentor: any;

  constructor(private route: ActivatedRoute, private api: ApiService, private location: Location) {}

  ngOnInit() {
    const mentorId = this.route.snapshot.paramMap.get('id');
    if (mentorId) {
      this.api.genericGet(`mentors/${mentorId}`).subscribe(
        (res) => {
          this.mentor = res;
        },
        (error) => {
          console.error('Error fetching mentor details:', error);
        }
      );
    }
  }

  goBack() {
    this.location.back()
  }
}
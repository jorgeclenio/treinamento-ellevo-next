import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUtilityService } from '../../services/app-utility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public title: string = "Profile";

  constructor(
    private router: Router,
    public global_utilities: AppUtilityService
  ) { }

  ngOnInit() {
  }

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }

}

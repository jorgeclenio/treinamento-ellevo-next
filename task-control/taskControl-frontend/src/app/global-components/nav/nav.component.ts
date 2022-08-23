import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from "../../modules/shared";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    public global_utilities: AppUtilityService
    ) {}

  ngOnInit() {
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  public profile() {
    this.router.navigate(['/home/profile'])
  }

  public about() {
    this.router.navigate(['/home/about'])
  }

}

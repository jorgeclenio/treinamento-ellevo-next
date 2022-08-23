import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from "../..";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

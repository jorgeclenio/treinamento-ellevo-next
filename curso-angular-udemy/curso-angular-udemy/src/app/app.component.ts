import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!-- <app-data-binding></app-data-binding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

    <div class="container mt-3">
      <app-food-add></app-food-add>
      <app-food-list></app-food-list>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}

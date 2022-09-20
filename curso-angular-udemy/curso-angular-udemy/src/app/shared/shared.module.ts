import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
// components
import { FoodListComponent } from "./food-list/food-list.component";
import { FoodAddComponent } from "./food-add/food-add.component";

@NgModule({
  declarations: [FoodListComponent, FoodAddComponent],
  exports: [FoodListComponent, FoodAddComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class SharedModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./todo/components/header/header.component";
import { TodoButtomDeleteAllComponent } from "./todo/components/todo-buttom-delete-all/todo-buttom-delete-all.component";
import { TodoInputAddItemsComponent } from "./todo/components/todo-input-add-items/todo-input-add-items.component";
import { TodoListComponent } from "./todo/components/todo-list/todo-list.component";

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtomDeleteAllComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    TodoButtomDeleteAllComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
  ],
})
export class HomeModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastComponent } from "./components/toast/toast.component";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";
import { DialogFormComponent } from "./components/dialog-form/dialog-form.component";

@NgModule({
  declarations: [ToastComponent, SnackbarComponent, DialogFormComponent],
  imports: [CommonModule],
  exports: [ToastComponent],
})
export class SharedModule {}

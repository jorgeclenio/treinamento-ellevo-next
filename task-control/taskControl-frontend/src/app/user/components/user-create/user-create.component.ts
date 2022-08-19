import { ModalComponent } from './../../../shared/modal/modal.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent{
  @ViewChild(ModalComponent, { static: false })
  public modalComponent: ModalComponent;

  constructor() { }

  public openModal (){
    // console.log("deu certo");
    this.modalComponent.openModal();
  }
}

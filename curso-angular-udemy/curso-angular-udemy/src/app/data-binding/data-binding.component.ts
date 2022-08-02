import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public nome: string = 'Jorge Clênio';
  public idade: number = 26;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = 'https://via.placeholder.com/500x90';
  public imgTitle: string = 'Property Binding';

  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() {}

  ngOnInit(): void {}

  public alertInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent){
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}

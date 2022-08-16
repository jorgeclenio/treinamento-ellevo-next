import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  public title: string = "Registered users";

  public users = [
    {
      id: "1",
      name: "Fulano da Silva",
      username: "fulano.silva",
      cpf: "123.456.789-00",
      phonenumber: "(12) 93456-7890",
      email: "fulano.silva@email.com",
    },
    {
      id: "2",
      name: "Sicrano de Souza",
      username: "sicrano.souza",
      cpf: "123.456.789-01",
      phonenumber: "(12) 93456-7891",
      email: "sicrano.souza@email.com",
    },
    {
      id: "3",
      name: "Beltrano da Costa",
      username: "beltrano.costa",
      cpf: "123.456.789-02",
      phonenumber: "(12) 93456-7892",
      email: "beltrano.costa@email.com",
    },
    {
      id: "4",
      name: "Astolfo Pereira",
      username: "astolfo.pereira",
      cpf: "123.456.789-03",
      phonenumber: "(12) 93456-7893",
      email: "astolfo.pereira@email.com",
    },
  ];

  constructor() {}

  ngOnInit() {}
}

import { Component } from '@angular/core';
import { userprofile } from '../../interfaces/userProfile';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [],
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent {
  public connections: userprofile[] = [
    {
      firstName: "Alden Ware",
      phoneNumber: "1-126-326-2664",
      email: "ligula.tortor@hotmail.couk",
      address: "654-4899 Semper St.",
      lastName: "Fay Dale",
      _id: '1',
      username: "XKN52BMR1TS"
    },
    {
      firstName: "Ian Barton",
      phoneNumber: "(268) 627-3932",
      email: "accumsan.sed@outlook.com",
      address: "513-8263 Et, Road",
      lastName: "Wayne Shelton",
      _id: '2',
      username: "TRI75ISH4HN"
    },
    {
      firstName: "Yolanda England",
      phoneNumber: "1-758-237-8080",
      email: "convallis.ligula.donec@hotmail.ca",
      address: "Ap #801-5712 Consectetuer St.",
      lastName: "Mallory Mills",
      _id: "3",
      username: "XXX12EHN6FC"
    },
    {
      firstName: "Emmanuel Rollins",
      phoneNumber: "(745) 841-4908",
      email: "semper.erat@yahoo.org",
      address: "Ap #505-9613 Diam Rd.",
      lastName: "Armand Watkins",
      _id: '4',
      username: "SJI30HUQ6MM"
    },
    {
      firstName: "Patricia Day",
      phoneNumber: "1-244-682-3633",
      email: "quam@icloud.org",
      address: "Ap #339-3653 Habitant Avenue",
      lastName: "Vernon Mcbride",
      _id: '5',
      username: "YOV77ARK6XZ"
    }
  ];

}

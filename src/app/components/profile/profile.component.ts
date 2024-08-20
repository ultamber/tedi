import { Component, OnInit } from '@angular/core';
import { userprofile } from '../../interfaces/userProfile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  public userProfile: userprofile = { 
    _id : '1a2b3c4d',
    email : 'admin@email.com',
    firstName : 'John',
    lastName: 'Doe',
    address: 'ADDRESS AAA',
    phoneNumber : '6971111111',
    username: 'admin'
  };

  constructor(){

  }

  ngOnInit(): void {
      
  }
}

import { Component, OnInit } from '@angular/core';
import {User} from "../_models";
import {UserService} from "../_services";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  currentUser: User;
  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('userPrincipal'));
    console.log(this.currentUser);
  }

  ngOnInit() {
  }

}

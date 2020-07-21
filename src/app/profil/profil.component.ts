import { Component, OnInit } from '@angular/core';
import {User} from "../_models";
import {AuthenticationService, UserService} from "../_services";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  currentUser: User;
  userRole$: Observable<string>;
  constructor(private userService: UserService, private authService: AuthenticationService) {
    this.currentUser = JSON.parse(localStorage.getItem('userPrincipal'));
    console.log(this.currentUser);
  }


  ngOnInit() {
    this.authService.getUserRole.subscribe((value) => {
      if (value) {
        console.log(value);
        this.userRole$ = this.authService.getUserRole;
      }else if(localStorage.getItem('currentUser')){
        console.log(value);
        this.authService.validateToken;
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AuthenticationService} from "../_services";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userRole$: Observable<string>;
  constructor( private authService: AuthenticationService) { }

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

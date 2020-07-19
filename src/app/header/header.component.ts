import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

declare function require(path: string);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private msgHomeLabel = environment.default_home_label;
  private msgHomeMenuResult = environment.default_home_menu_result;
  private msgHomeMenuCandidats = environment.default_home_menu_candidats;
  private msgHomeMenuTests = environment.default_home_menu_tests;
  private msgHomeMenuDeconnexion = environment.default_home_menu_deco;

  imageLogo = require('assets/images/logo.png');

  isLoggedIn$: Observable<boolean>;
  userRole$: Observable<string>;

  constructor(
    private router:Router,
    private authService: AuthenticationService
    ) { }

  ngOnInit() {
    console.log("header");
    this.authService.isLoggedIn.subscribe((value) => {
      if (value) {
          console.log("1");
          this.isLoggedIn$ = this.authService.isLoggedIn;
      }else if(localStorage.getItem('currentUser')){
        console.log("2");
        this.authService.validateToken();
      }
    });

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

  logout() {
    console.log("log out");
    this.authService.logout();
    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log(this.isLoggedIn$);
    this.router.navigate(["/login"]);
  }

  

}

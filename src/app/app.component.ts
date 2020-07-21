import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './_services/authentication.service';

declare function require(path: string);
@Component({
  selector: 'app-root',
  template: `
  <section class="" >
    <header class="header bg-dark">
      <nav class="navbar navbar-static-top navbar-expand-lg header-sticky">
        <div class="container-fluid">
          <button id="nav-icon4" type="button" class="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a class="navbar-brand" routerLink="/home">
            <img class="img-fluid" src="{{imageLogo}}" height="70px" alt="logo">
          </a>
          <app-header></app-header>
          <div class="add-listing">
            <div *ngIf="isLogged" class="login d-inline-block mr-4">
              <a routerLink="/login"><i class="far fa-user pr-2" ></i>Sign in</a>
            </div>
            <div *ngIf="authenticatedUser$ | async as authenticatedUser" class="login d-inline-block mr-4">
              <a style="color: #ffffff" ><i class="far fa-user pr-2" ></i>Bienvenue {{authenticatedUser}}</a>
            </div>
            <a *ngIf="authenticatedUser$ | async as authenticatedUser" class="btn btn-white btn-md" href="#"> <i class="fas fa-plus-circle"></i>Post a job</a>
          </div>
        </div>
      </nav>
    </header>

    <section class="space-ptb">
    <div class="">
      <div class="">
      <router-outlet></router-outlet>
      <app-footer></app-footer>
      </div>
    </div>
    </section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Accueil';
  private msgHomeLabel = environment.default_home_label;
  private msgHomeMenuResult = environment.default_home_menu_result;
  private msgHomeMenuCandidats = environment.default_home_menu_candidats;
  private msgHomeMenuTests = environment.default_home_menu_tests;
  private msgHomeMenuDeconnexion = environment.default_home_menu_deco;
  private msgHomeFooter = environment.default_home_footer;
  public authenticatedUser$: Observable<string>;
  public isLogged: boolean;

  imageLogoTwitter = require('assets/images/logo_twitter.png');
  imageLogoLinkedin = require('assets/images/logo_linkedin.png');
  imageLogoYoutube = require('assets/images/logo_youtube.png');
  imageLogoRss = require('assets/images/logo_rss.png');
  imageLogoFB = require('assets/images/logo_fb.png');

  imageLogo = require('assets/img/Officium.png');

  constructor(
    private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    console.log("App componenet Init");
    this.authenticatedUser$ = this.authService.curentUser;
    this.isLogged = this.authService.isLoggedInHeader;
  }
}

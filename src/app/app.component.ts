import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './_services/authentication.service';

declare function require(path: string);
@Component({
  selector: 'app-root',
  template: `
  <div class="" >
    <div class="card">
    <div class="card-body">
      <div id="grailsLogo" role="banner">
        <a href="#"><img src="{{imageLogo}} "  height="70px" /></a>
        <p *ngIf="authenticatedUser$ | async as authenticatedUser"
         style="color:green;font-size:70%;">
         Bienvenue {{authenticatedUser}}</p>
      </div>
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
    </div>
  </div>
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
  }
}

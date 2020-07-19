import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

declare function require(path: string);
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private msgHomeFooter = environment.default_home_footer;

    imageLogoTwitter = require('assets/images/logo_twitter.png');
    imageLogoLinkedin = require('assets/images/logo_linkedin.png');
    imageLogoYoutube = require('assets/images/logo_youtube.png');
    imageLogoRss = require('assets/images/logo_rss.png');
    imageLogoFB = require('assets/images/logo_fb.png');

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }

}

import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from '../app.component';

declare function require(path: string);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* parametres de configuration */
  public msgBienvenue = environment.default_home_menu_bienvenue;
  private msgWelcomeAuthUser: string;

  /* Images paths */
  imageRecrute = require('assets/images/21404.jpg');
  currentUser: User;
  users: User[] = [];

  constructor(
    private userService: UserService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

}

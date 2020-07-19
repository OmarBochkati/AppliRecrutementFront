import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { User } from '../_models/user';
import { UserPrincipal } from '../_models/userPrincipal';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('${environment.apiUrl}/users');
  }

  getUser(): Observable<UserPrincipal> {
    return this.http.get<UserPrincipal>(`${environment.apiUrl}/home/user`);
  }

  getById(id: number) {
    return this.http.get('${environment.apiUrl}/users/' + id);
  }

  create(user: User) {
    return this.http.post('${environment.apiUrl}/authenticate/signup', user);
  }

  update(user: User) {
    return this.http.put('${environment.apiUrl}/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('${environment.apiUrl}/users/' + id);
  }
}

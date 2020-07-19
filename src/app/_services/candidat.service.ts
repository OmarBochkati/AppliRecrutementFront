import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Candidat } from '../_models/candidat';
import { CANDIDATS } from '../mock-candidats';

@Injectable()
export class CandidatService {
  constructor(private http: HttpClient) { }

  getCandidats(): Observable<Candidat[]> {
      return this.http.get<Candidat[]>(`${environment.apiUrl}/users/allcandidats`);
  }

  create(candidat: Candidat) {
    console.log(candidat);
    return this.http.post(`${environment.apiUrl}/users/createCandidat`, candidat);
  }

}

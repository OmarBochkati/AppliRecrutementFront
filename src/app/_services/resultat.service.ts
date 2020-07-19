import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Resultat } from '../_models/resultat';
import { RESULTATS } from '../mock-resultats';

@Injectable()
export class ResultatService {

  constructor(private http: HttpClient) { }

  getResultats(): Observable<Resultat[]> {
        return of(RESULTATS);
  }

}

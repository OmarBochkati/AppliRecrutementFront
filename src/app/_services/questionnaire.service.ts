import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Questionnaire } from '../_models/questionnaire';
import { QUESTIONNAIRES } from '../mock-questionnaires';

import { environment } from '../../environments/environment';

@Injectable()
export class QuestionnaireService {

  constructor(private http: HttpClient) { }

  getQuestionnaires(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${environment.apiUrl}/questionnaires/allQCMs`);
      //  return of(QUESTIONNAIRES);
  }

  create(questionnaire: any) {
    return this.http.post(`${environment.apiUrl}/questionnaires/createQCM`, questionnaire);
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';

import 'rxjs/add/operator/map';

import { DataTableResource } from 'angular5-data-table';

import { QuestionnaireService } from '../_services/questionnaire.service';
import { Questionnaire } from '../_models/questionnaire';
import { QUESTIONNAIRES } from '../mock-questionnaires';
import {QuizService} from "../services/quiz.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  providers: [QuizService]
})
export class QuestionnaireComponent implements OnInit {
  questionnaires: Questionnaire[];
  quizes: any[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Questionnaire> = new Subject();

  displayQuizForm: boolean = false;

  newQuizFrom(){
    this.displayQuizForm = !this.displayQuizForm;
  }

  constructor(private questionnaireService: QuestionnaireService,private quizService: QuizService) { }

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.questionnaireService.getQuestionnaires().subscribe(questionnaires => {
        this.questionnaires = questionnaires;
        this.dtTrigger.next();
      });
  }

}

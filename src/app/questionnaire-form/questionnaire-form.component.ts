import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService, QuestionnaireService } from '../_services/index';

import { Questionnaire } from '../_models/index';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent implements OnInit {

  @Input() showMePartially: boolean;

  private questionnaireForm: any;
  
  myForm: FormGroup;
  description: FormControl;
  nomTest: FormControl;
  temps: FormControl;
  maxPoint: FormControl;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertService: AlertService,
    private questionnaireService: QuestionnaireService
  ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.myForm.valueChanges.subscribe( val => {this.questionnaireForm = val ; console.log(val)} 
    );
  }

  createFormControls() {
    this.description = new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(30)]
    );
    this.nomTest = new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(10)]
    );
    this.temps = new FormControl('30');
    this.maxPoint = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.myForm = new FormGroup({
      description: this.description,
      nomTest: this.nomTest,
      temps: this.temps,
      maxPoint: this.maxPoint
    });
  }

  register() {
    console.log(this.questionnaireForm);
    this.questionnaireService.create(this.questionnaireForm)
      .subscribe(
      data => {
        console.log(data);
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/questionnaires']);
      },
      error => {
        this.alertService.error(error);
      });
  }

}

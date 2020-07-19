import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService, CandidatService, QuestionnaireService } from '../_services/index';

import { Candidat, Questionnaire } from '../_models/index';

@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.css']
})
export class CandidatFormComponent implements OnInit {

  @Input() showMePartially: boolean;

  listQuestionnaires: Questionnaire[];
  loading = false;
  modelCandidat: Candidat;
  candidatToSubmit: Candidat = {id:0, pseudo: '', nom: '', prenom: '', email:'', telephone:'', password:'',confirmPassword:'', niveau:1, compteStatus: false, questionnaires:[]};

  myForm: FormGroup;

  /** Form controls to Writing shorter validation expressions in template */
  id: FormControl;
  pseudo: FormControl;
  nom: FormControl;
  prenom: FormControl;
  email: FormControl;
  telephone: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  niveau: FormControl;
  compteStatus: FormControl;
  //questionnaires: FormGroup;
  questionnaires: FormArray;

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private candidatService: CandidatService,
    private alertService: AlertService,
    private questionnaireService: QuestionnaireService
    ) { }

    ngOnInit(){
      this.questionnaireService.getQuestionnaires().subscribe(res => { this.listQuestionnaires = res; 
        this.createFormControls();
        this.createForm();
        console.log(this.listQuestionnaires);
        this.listQuestionnaires.forEach(qcm => {if(qcm) this.fillingQuestionnairesForm(qcm) });
        console.log(res); 
        this.myForm.valueChanges.subscribe( val => {this.modelCandidat = val ;
        console.log(this.modelCandidat);
    });
      });
    }

  fillingQuestionnairesForm(qcm) {
    const control = <FormArray>this.myForm.controls['questionnaires'];
    control.push(new FormControl(true));
    console.log(this.myForm.value);
  }

  createFormControls() {
    this.id = new FormControl('');
    this.pseudo = new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(20)]
    );
    this.nom = new FormControl('', [
      Validators.required]);
    this.prenom = new FormControl(
      '', [Validators.required]
    );
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    ]);
    this.telephone = new FormControl('', [
      Validators.pattern("[\+]?[0-9]+")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
    this.confirmPassword = new FormControl('', [Validators.required]);
    this.niveau = new FormControl('1'),
    this.compteStatus = new FormControl('true'),
    //this.questionnaires = this.fb.group({ 'testJAVA': new FormControl('true'), 'testJEE': new FormControl('true') })
    this.questionnaires = this.fb.array([])
  }

  createForm() {
    this.myForm = new FormGroup({
      id: this.id,
      pseudo: this.pseudo,
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      telephone: this.telephone,
      password: this.password,
      confirmPassword: this.confirmPassword,
      niveau: this.niveau,
      compteStatus: this.compteStatus,
      questionnaires: this.questionnaires
    });
  }

  register() {
    this.loading = true;
    this.setCandidatBeforeSubmit();
    console.log(this.candidatToSubmit);
    this.candidatService.create(this.candidatToSubmit)
      .subscribe(
      data => {
        console.log(data);
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/candidat']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  setCandidatBeforeSubmit(){
    this.candidatToSubmit.id=this.modelCandidat.id;
    this.candidatToSubmit.pseudo=this.modelCandidat.pseudo;
    this.candidatToSubmit.nom=this.modelCandidat.nom;
    this.candidatToSubmit.prenom=this.modelCandidat.prenom;
    this.candidatToSubmit.email=this.modelCandidat.email;
    this.candidatToSubmit.telephone=this.modelCandidat.telephone;
    this.candidatToSubmit.password=this.modelCandidat.password;
    this.candidatToSubmit.confirmPassword=this.modelCandidat.confirmPassword;
    this.candidatToSubmit.niveau=this.modelCandidat.niveau;
    this.candidatToSubmit.compteStatus=this.modelCandidat.compteStatus;
    this.modelCandidat.questionnaires.forEach( (test, i) => {
      if(test){
        this.candidatToSubmit.questionnaires.push(this.listQuestionnaires[i]);
      }  
    });
  }

}

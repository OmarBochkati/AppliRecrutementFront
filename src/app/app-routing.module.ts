import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CandidatsComponent }   from './candidats/candidats.component';
import { ResultatComponent }   from './resultat/resultat.component';
import { QuestionnaireComponent }   from './questionnaire/questionnaire.component';
import { AideComponent } from './aide/aide.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/index';
import {QuizComponent} from "./quiz/quiz.component";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'candidats', component: CandidatsComponent, canActivate: [AuthGuard] },
  { path: 'resultats', component: ResultatComponent, canActivate: [AuthGuard] },
  { path: 'questionnaires', component: QuestionnaireComponent, canActivate: [AuthGuard] },
  { path: 'quizz', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'corrections', component: ResultatComponent, canActivate: [AuthGuard] },
  { path: 'aide', component: AideComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'deconnexion', component: LoginComponent, canActivate: [AuthGuard]},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }

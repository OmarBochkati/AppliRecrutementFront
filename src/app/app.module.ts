import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
** Forms & Forms validation
*/
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTableModule } from 'angular5-data-table';
import { DataTablesModule } from 'angular-datatables';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { CandidatFormComponent } from './candidat-form/candidat-form.component';
import { ResultatComponent } from './resultat/resultat.component';
import { ResultatService } from './_services/resultat.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireService } from './_services/questionnaire.service';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { AideComponent } from './aide/aide.component';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { LoginComponent } from './login/login.component';

import { CandidatService } from './_services/candidat.service';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';

import { ConfirmEqualValidatorDirective } from './_directives/confirm-equal-validator.directive';
import { ProfilComponent } from './profil/profil.component';
import {QuizComponent} from "./quiz/quiz.component";
import {StorageService} from "./services/storage.service";
import { OfferComponent } from './offer/offer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatsComponent,
    CandidatFormComponent,
    ResultatComponent,
    QuestionnaireComponent,
    QuestionnaireFormComponent,
    AideComponent,
    AlertComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    QuizComponent,
    ConfirmEqualValidatorDirective,
    ProfilComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataTableModule,
    DataTablesModule,
    HttpClientModule,
    HttpModule,
    PdfViewerModule
  ],
  providers: [CandidatService, ResultatService, QuestionnaireService,StorageService,
   AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

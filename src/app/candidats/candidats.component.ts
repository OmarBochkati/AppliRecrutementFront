import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';

import 'rxjs/add/operator/map';

import { DataTableResource } from 'angular5-data-table';

import { CandidatService } from '../_services/candidat.service';

import { Candidat } from '../_models/candidat';

import { CANDIDATS } from '../mock-candidats';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {
  candidats: Candidat[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Candidat> = new Subject();

  /** Messages to child component CandidatForm */
  displayCandidatForm: boolean = false;

  newCandidatFrom(){
    this.displayCandidatForm = !this.displayCandidatForm;
  }

  constructor(
    private http: Http,
    private candidatService:CandidatService
    ) { }

  ngOnInit(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.candidatService.getCandidats().subscribe(result => {
        this.candidats = result;
        this.dtTrigger.next();
      });
    /*
    this.http.get('data/data.json')
      .map(this.extractData)
      .subscribe(candidats => {
        this.candidats = candidats;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
      */
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}

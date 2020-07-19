import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';

import 'rxjs/add/operator/map';

import { DataTableResource } from 'angular5-data-table';

import { ResultatService } from '../_services/resultat.service';
import { Resultat } from '../_models/resultat';
import { RESULTATS } from '../mock-resultats';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  resultats: Resultat[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Resultat> = new Subject();

  constructor(private resultatService: ResultatService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.resultatService.getResultats().subscribe(resultats => {
        this.resultats = resultats;
        this.dtTrigger.next();
      });
  }

}

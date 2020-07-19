import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {

  pdfSrc: string = `${environment.apiUrl}/assets/ManuelUtilisationAppliRecrutementCGI.pdf`;

  constructor() { }

  ngOnInit() {
  }

}

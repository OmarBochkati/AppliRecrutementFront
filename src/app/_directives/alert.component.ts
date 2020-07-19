import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/index';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: any;

  constructor( private alerteService: AlertService ) { }

  ngOnInit() {
    this.alerteService.getMessage().subscribe(
      message => {this.message = message;}
    );
  }

}

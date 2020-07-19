import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  testVar: any = "";

  constructor() { }

  ngOnInit() {
  }

  alertButton() {
    alert("testVar value : " +this.testVar+"!!!");
    this.testVar = this.testVar + "changed";
  }



}

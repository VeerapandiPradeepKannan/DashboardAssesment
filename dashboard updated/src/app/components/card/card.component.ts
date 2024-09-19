import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() newItemEvent1 = new EventEmitter<string>();

  cJson: any = {
    "All": "",
    "PEO1": "Employeability",
    "PEO2": "Entrepreneur",
    "PEO3": "Research & Development",
    "PEO4": "Contributor to business world",
    "PEO5": "Contribution to society"
  }
  keys: any;

  constructor() { }

  ngOnInit(): void {
    console.log("chsibbbb", this.cJson);
    this.activeFlag = 'a';
    this.keys = Object.keys(this.cJson);
    console.log("Formated Keys", this.keys);
  }
  activeFlag: any;
  dataShow(i: any) {
    console.log("@@@", i)
    this.activeFlag = i;
    this.newItemEvent1.emit(this.activeFlag);
  }

}

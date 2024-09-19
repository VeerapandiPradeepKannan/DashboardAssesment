import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
  constructor() {}

  accordianData: any[] = [
    {
      PO: 'PO1',
      skill: 'Decision Making Skill',
      evaluation: {
        completed: 5,
        total: 12,
      },
      progress: '80%',
    },
    {
      PO: 'PO2',
      skill: 'Communication Skill',
      evaluation: {
        completed: 5,
        total: 12,
      },
      progress: '80%',
    },
    {
      PO: 'PO3',
      skill: 'Employability Skill',
      evaluation: {
        completed: 5,
        total: 12,
      },
      progress: '80%',
    },
    {
      PO: 'PO4',
      skill: 'Entrepreneurial Skill',
      evaluation: {
        completed: 5,
        total: 12,
      },
      progress: '80%',
    },
    {
      PO: 'PO5',
      skill: 'Contribution to Society',
      evaluation: {
        completed: 5,
        total: 12,
      },
      progress: '80%',
    },
    {
      PO: 'PO6',
      skill: 'Problem Solving Skill',
      evaluation: {
        completed: 5,
        total: 12,
      },
      progress: '80%',
    },
  ];
  ngOnInit(): void {}
}

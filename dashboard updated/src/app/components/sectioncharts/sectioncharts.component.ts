import { Component, OnInit, Input, OnChanges } from '@angular/core';
interface Courses {
  Course_Code: string;
  Course_Name: string;
  Course_type: string;
  Semester: string;
  Credits: string;
  Course_Outcomes: string;
  Evaluation_Report: string;
  OBE_Report: string;
  display: string;

}
@Component({
  selector: 'app-sectioncharts',
  templateUrl: './sectioncharts.component.html',
  styleUrls: ['./sectioncharts.component.scss']
})
export class SectionchartsComponent implements OnInit, OnChanges {
  @Input() assignFlag: any;
  sampleCardData: Courses[] = [
    {
      display: 'true',
      Course_Code: 'BA3101',
      Course_Name: 'Management Principals and Organization',
      Course_type: 'Program Core',
      Semester: 'l',
      Credits: '4',
      Course_Outcomes: '5',
      Evaluation_Report: '../assets/images/growth.png',
      OBE_Report: '../assets/images/circlecraf.png',


    }, {
      display: 'true',
      Course_Code: 'BA3101',
      Course_Name: 'Management Principals and Organization',
      Course_type: 'Program Core',
      Semester: 'l',
      Credits: '4',
      Course_Outcomes: '5',
      Evaluation_Report: '../assets/images/growth.png',
      OBE_Report: '../assets/images/circlecraf.png',


    },
    {
      display: 'true',
      Course_Code: 'BA3101',
      Course_Name: 'Management Principals and Organization',
      Course_type: 'Program Core',
      Semester: 'l',
      Credits: '4',
      Course_Outcomes: '5',
      Evaluation_Report: '../assets/images/growth.png',
      OBE_Report: '../assets/images/circlecraf.png',


    },
    {
      display: 'false',
      Course_Code: 'BA3101',
      Course_Name: 'Management Principals and Organization',
      Course_type: 'Program Core',
      Semester: 'l',
      Credits: '4',
      Course_Outcomes: '5',
      Evaluation_Report: '../assets/images/growth.png',
      OBE_Report: '../assets/images/circlecraf.png',


    },
    {
      display: 'false',
      Course_Code: 'BA3101',
      Course_Name: 'Management Principals and Organization',
      Course_type: 'Program Core',
      Semester: 'l',
      Credits: '4',
      Course_Outcomes: '5',
      Evaluation_Report: '../assets/images/growth.png',
      OBE_Report: '../assets/images/circlecraf.png',


    },
    {
      display: 'false',
      Course_Code: 'BA3101',
      Course_Name: 'Management Principals and Organization',
      Course_type: 'Program Core',
      Semester: 'l',
      Credits: '4',
      Course_Outcomes: '5',
      Evaluation_Report: '../assets/images/growth.png',
      OBE_Report: '../assets/images/circlecraf.png',


    },


  ];
  dataSource = this.sampleCardData;
  displayedColumns: string[] = ['Course_Code', 'Course_Name', 'Course_type', 'Semester', 'Credits', 'Course_Outcomes', 'Evaluation_Report', 'OBE_Report'];
  constructor() { }
  chartOpenStatus: any;
  headName: any;
  ngOnInit(): void {
    this.chartOpenStatus = true;
    this.headName = "Course Evaluation Report"
  }
  ngOnChanges() {
    console.log("assignFlag", this.assignFlag);
    if (this.assignFlag != 'a' && this.assignFlag != undefined) {
      this.dataSource = this.sampleCardData.filter(course => course.display === 'true');
    } else {
      this.dataSource = this.sampleCardData;
    }
  }

  chartOpen() {
    this.chartOpenStatus = true;
    this.headName = "Course Evaluation Report"
  }
  tableOpen() {
    this.chartOpenStatus = false;
    this.headName = "Course Details"

  }
}

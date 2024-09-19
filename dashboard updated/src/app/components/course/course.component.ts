import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'; // Import MatDividerModule

@Component({
  selector: 'app-course',
  // standalone: true,
  // imports: [CommonModule,MatDividerModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  keys: any;
  cJson: any = {
    "Course Code": "5AB858",
    "Course Name": "Quantitative Techniques",
    "Course Type": "Program Elective",
    "Course Period": "Semester I",
    "Credits": {
      "Lecture": 4,
      "Tutorial": 3,
      "Project": 0,
      "Practical": 1
    },
    "Course Outcomes": [
      "co 2",
      "co 4",
      "co 5",
      "co 8",
      "co 13",
      "co 15"
    ],
    "Mapped to this Course": [
      "po 7",
      "po 9",
      "po 13",
      "po 8"
    ]
  }
  len: any;


  ngOnInit() {
    // console.log("json", this.cJson);
    this.keys = Object.keys(this.cJson);
    // console.log("Formated Keys", this.keys);
  }

  getKeys(obj: any): string[] {
    // console.log("Objggggggg",obj);
    let len = Object.keys(obj);
    // console.log("len",len);

    // this.len=len.length;
    // setTimeout(() => {
    //   this.len = len.length;
    // }, 0);

    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
      return Object.keys(obj);
    }
    return [];
  }
}

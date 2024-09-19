import { ChangeDetectorRef, Component, OnInit, Output, EventEmitter } from '@angular/core';
interface Programs {
  Program_Code: string;
  Program_Name: string;
  Program_Attainment: number;
  // Program_Attainment_inpercent: string,
  Status: string;
  Image_URL: string;
}
@Component({
  selector: 'app-programcardsection',
  templateUrl: './programcardsection.component.html',
  styleUrls: ['./programcardsection.component.scss']
})
export class ProgramcardsectionComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  showFiller: boolean = false;
  dashboardStatus: any;
  selectedView: string = "card";
  sampleCardData: Programs[] = [
    {
      Program_Code: 'MV012H',
      Program_Name: 'Masters in Business Administration',
      Program_Attainment: 70,
      // Program_Attainment_inpercent: "70%",
      Status: 'LIVE',
      Image_URL: '../assets/images/img1.png',
    },
    {
      Program_Code: 'MV013I',
      Program_Name: 'Masters in Science - Software Engineering',
      Program_Attainment: 10,
      // Program_Attainment_inpercent: "10%",
      Status: 'LIVE',
      Image_URL: '../assets/images/img 2.jpg',
    },
    {
      Program_Code: 'MV012M',
      Program_Name: 'Bachelor of Computer Application',
      Program_Attainment: 90,
      // Program_Attainment_inpercent: "90%",
      Status: 'LIVE',
      Image_URL: '../assets/images/img 3.jpg',
    },
    {
      Program_Code: 'MV0134S',
      Program_Name: 'Bachelor of Engineering (Civil)',
      Program_Attainment: 33,
      // Program_Attainment_inpercent: "33%",
      Status: 'LIVE',
      Image_URL: '../assets/images/img 4.jpg',
    },
    {
      Program_Code: 'MV0133R',
      Program_Name: 'Masters in Computer Application',
      Program_Attainment: 54,
      // Program_Attainment_inpercent: "54%",
      Status: 'LIVE',
      Image_URL: '../assets/images/img 5.jpg',
    },
    {
      Program_Code: 'MV013I',
      Program_Name: 'Diploma in Computer Science',
      Program_Attainment: 0,
      // Program_Attainment_inpercent: "0%",
      Status: 'RAFT',
      Image_URL: '../../assets/images/img 6.jpg',
    },
  ];
  dataSource = this.sampleCardData;
  displayedColumns = Object.keys(this.dataSource[0]);
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.displayedColumns = this.displayedColumns.filter(
      (field) => field != 'Image_URL'
    );
  }
  updateDraw() {
    this.showFiller = !this.showFiller;
  }

  onButtonToggleChange(view: string) {
    this.selectedView = view;
    this.cdr.markForCheck(); // Notify Angular of changes
  }
  gotoDashboard() {
    this.dashboardStatus = "true";
    this.newItemEvent.emit(this.dashboardStatus);
  }
}

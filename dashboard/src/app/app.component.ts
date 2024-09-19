import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  title = 'dashboard_App';
  showFiller: boolean = false;
  prCardSection: boolean = false;
  updateDraw() {
    // this.showFiller = !this.showFiller;
  }
  menuItems!: any[];

  constructor() { }
  isDisplay = false

  ngOnInit() {
    let sidebar = document.querySelector('.sidebar')!;
    let closeBtn = document.querySelector('#btn')!;
    let searchBtn = document.querySelector('.bx-search')!;

    closeBtn.addEventListener('click', () => {
      this.isDisplay = !this.isDisplay
      sidebar.classList.toggle('open');

      // menuBtnChange(); //calling the function(optional)
    });

    // searchBtn.addEventListener('click', () => {
    //   // Sidebar open when you click on the search iocn
    //   sidebar.classList.toggle('open');
    //   menuBtnChange(); //calling the function(optional)
    // });

    // following are the code to change sidebar button(optional)
    // function menuBtnChange() {
    //   if (sidebar.classList.contains('open')) {
    //     closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); //replacing the iocns class
    //   } else {
    //     closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); //replacing the iocns class
    //   }
    // }
  }
  gotoSection() {
    this.prCardSection = true;
  }
  onFocus(i: any) {
    console.log("!!!!", i)
    if (i == "true") {
      this.prCardSection = false;
    }

  }
  assignFlag: any;
  onGetVal(event: any) {
    this.assignFlag = event;
  }
} 

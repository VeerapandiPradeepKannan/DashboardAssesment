import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { StudAttComponent } from './components/stud-att/stud-att.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { CardComponent } from './components/card/card.component';
import { SectionchartsComponent } from './components/sectioncharts/sectioncharts.component';
import { RenamePipe } from './components/rename.pipe';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatTableModule } from '@angular/material/table';
import { ProgramcardsectionComponent } from './programcardsection/programcardsection.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
@NgModule({
  declarations: [AppComponent, CourseComponent, AssessmentComponent, StudAttComponent, CardComponent, RenamePipe, SectionchartsComponent, ProgramcardsectionComponent, ExpansionPanelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule, NgApexchartsModule, MatListModule, FormsModule, MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatButtonToggleModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 1,
      backgroundPadding: 41,
      radius: 20,
      space: -10,
      toFixed: 0,
      outerStrokeWidth: 20,
      outerStrokeColor: '#4882c2',
      outerStrokeGradientStopColor: '#53a9ff',
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 20,
      title: 'UI',
      animateTitle: false,
      animationDuration: 1000,
      showSubtitle: false,
      showUnits: false,
      showBackground: false,
      clockwise: true,
      startFromZero: false,
      showZeroOuterStroke: false,
      lazy: false,
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

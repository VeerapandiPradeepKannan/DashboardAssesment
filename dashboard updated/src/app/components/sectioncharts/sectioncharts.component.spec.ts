import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionchartsComponent } from './sectioncharts.component';

describe('SectionchartsComponent', () => {
  let component: SectionchartsComponent;
  let fixture: ComponentFixture<SectionchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

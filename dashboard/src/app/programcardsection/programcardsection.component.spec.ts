import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramcardsectionComponent } from './programcardsection.component';

describe('ProgramcardsectionComponent', () => {
  let component: ProgramcardsectionComponent;
  let fixture: ComponentFixture<ProgramcardsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramcardsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramcardsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

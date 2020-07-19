import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatFormComponent } from './candidat-form.component';

describe('CandidatFormComponent', () => {
  let component: CandidatFormComponent;
  let fixture: ComponentFixture<CandidatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

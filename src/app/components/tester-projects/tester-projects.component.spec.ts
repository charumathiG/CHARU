import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterProjectsComponent } from './tester-projects.component';

describe('TesterProjectsComponent', () => {
  let component: TesterProjectsComponent;
  let fixture: ComponentFixture<TesterProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

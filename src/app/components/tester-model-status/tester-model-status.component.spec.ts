import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterModelStatusComponent } from './tester-model-status.component';

describe('TesterModelStatusComponent', () => {
  let component: TesterModelStatusComponent;
  let fixture: ComponentFixture<TesterModelStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterModelStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterModelStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

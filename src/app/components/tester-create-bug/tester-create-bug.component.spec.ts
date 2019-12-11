import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterCreateBugComponent } from './tester-create-bug.component';

describe('TesterCreateBugComponent', () => {
  let component: TesterCreateBugComponent;
  let fixture: ComponentFixture<TesterCreateBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterCreateBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterCreateBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

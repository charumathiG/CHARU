import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterBugfixModulesComponent } from './tester-bugfix-modules.component';

describe('TesterBugfixModulesComponent', () => {
  let component: TesterBugfixModulesComponent;
  let fixture: ComponentFixture<TesterBugfixModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterBugfixModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterBugfixModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterViewModulesComponent } from './tester-view-modules.component';

describe('TesterViewModulesComponent', () => {
  let component: TesterViewModulesComponent;
  let fixture: ComponentFixture<TesterViewModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterViewModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterViewModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

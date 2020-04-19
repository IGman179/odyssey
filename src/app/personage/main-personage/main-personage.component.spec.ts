import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPersonageComponent } from './main-personage.component';

describe('MainPersonageComponent', () => {
  let component: MainPersonageComponent;
  let fixture: ComponentFixture<MainPersonageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPersonageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPersonageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

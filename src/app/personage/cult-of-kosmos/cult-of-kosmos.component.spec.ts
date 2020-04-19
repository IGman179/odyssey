import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultOfKosmosComponent } from './cult-of-kosmos.component';

describe('CultOfKosmosComponent', () => {
  let component: CultOfKosmosComponent;
  let fixture: ComponentFixture<CultOfKosmosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultOfKosmosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultOfKosmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

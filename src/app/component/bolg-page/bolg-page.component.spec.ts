import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgPageComponent } from './bolg-page.component';

describe('BolgPageComponent', () => {
  let component: BolgPageComponent;
  let fixture: ComponentFixture<BolgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolgPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

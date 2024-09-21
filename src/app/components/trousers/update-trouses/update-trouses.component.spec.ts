import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrousesComponent } from './update-trouses.component';

describe('UpdateTrousesComponent', () => {
  let component: UpdateTrousesComponent;
  let fixture: ComponentFixture<UpdateTrousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTrousesComponent]
    });
    fixture = TestBed.createComponent(UpdateTrousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

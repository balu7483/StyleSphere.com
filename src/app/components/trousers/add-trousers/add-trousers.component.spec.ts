import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrousersComponent } from './add-trousers.component';

describe('AddTrousersComponent', () => {
  let component: AddTrousersComponent;
  let fixture: ComponentFixture<AddTrousersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTrousersComponent]
    });
    fixture = TestBed.createComponent(AddTrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

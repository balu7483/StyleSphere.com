import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshirtComponent } from './addshirt.component';

describe('AddshirtComponent', () => {
  let component: AddshirtComponent;
  let fixture: ComponentFixture<AddshirtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddshirtComponent]
    });
    fixture = TestBed.createComponent(AddshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

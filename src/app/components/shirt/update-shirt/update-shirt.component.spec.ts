import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShirtComponent } from './update-shirt.component';

describe('UpdateShirtComponent', () => {
  let component: UpdateShirtComponent;
  let fixture: ComponentFixture<UpdateShirtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateShirtComponent]
    });
    fixture = TestBed.createComponent(UpdateShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSlidesComponent } from './update-slides.component';

describe('UpdateSlidesComponent', () => {
  let component: UpdateSlidesComponent;
  let fixture: ComponentFixture<UpdateSlidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSlidesComponent]
    });
    fixture = TestBed.createComponent(UpdateSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

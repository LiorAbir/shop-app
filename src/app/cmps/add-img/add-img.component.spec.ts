import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgComponent } from './add-img.component';

describe('AddImgComponent', () => {
  let component: AddImgComponent;
  let fixture: ComponentFixture<AddImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulSubmitedPageComponent } from './successful-submited-page.component';

describe('SuccessfulSubmitedPageComponent', () => {
  let component: SuccessfulSubmitedPageComponent;
  let fixture: ComponentFixture<SuccessfulSubmitedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulSubmitedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulSubmitedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

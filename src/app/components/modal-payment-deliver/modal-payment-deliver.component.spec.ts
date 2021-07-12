import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaymentDeliverComponent } from './modal-payment-deliver.component';

describe('ModalPaymentDeliverComponent', () => {
  let component: ModalPaymentDeliverComponent;
  let fixture: ComponentFixture<ModalPaymentDeliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPaymentDeliverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPaymentDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

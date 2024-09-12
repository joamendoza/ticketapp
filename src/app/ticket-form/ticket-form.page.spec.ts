import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketFormPage } from './ticket-form.page';

describe('TicketFormPage', () => {
  let component: TicketFormPage;
  let fixture: ComponentFixture<TicketFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

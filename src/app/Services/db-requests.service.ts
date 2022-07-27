import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DbRequestsService {
  constructor() {}

  // Rooms
  getRoomsList() {}
  getRoomById() {}

  // customers
  getCustomerList() {}
  getCustomerById() {}

  // booking
  getBookingList() {}
  getBookingById() {}

  // payments
  getAllPayments() {}
  getPaymentsByCustomer() {}
}

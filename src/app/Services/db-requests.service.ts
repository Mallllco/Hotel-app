import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DbRequestsService {
  apiUrl = 'https://21f6-80-104-215-127.eu.ngrok.io/';

  roomListUrl = `${this.apiUrl}room`;
  customerListUrl = `${this.apiUrl}customer`;
  bookingListUrl = `${this.apiUrl}booking`;
  paymentsListUrl = `${this.apiUrl}payment`;
  testUrl = `${this.apiUrl}test`;

  constructor(private http: HttpClient) {}

  // Rooms
  getRoomsList() {}
  getRoomById(id: number) {
    return this.http.get(this.roomListUrl);
  }

  // customers
  getCustomerList() {}
  getCustomerByName() {}

  // booking
  getBookingList() {}
  getBookingById() {}

  // payments
  getPaymentsList() {}
  getPaymentsByCustomer() {}
}

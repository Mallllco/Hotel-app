import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CustomerComponent } from './customer/customer.component';
import { PaymentsComponent } from './payments/payments.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'customers', component: CustomerComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'rooms/:id', component: RoomDetailsComponent },
      { path: 'payments', component: PaymentsComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { CustomerComponent } from './customer/customer.component';
import { PaymentsComponent } from './payments/payments.component';

const matModules = [
  MatDatepickerModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatInputModule,
  BrowserAnimationsModule,
];
@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    RoomsComponent,
    RoomDetailsComponent,
    CustomerComponent,
    PaymentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormControl,
    FormsModule,
    ...matModules,
  ],
  exports: [...matModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LayoutComponent} from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/app-header/header.component';
import { CheckboxesComponent } from './components/app-checkboxes/checkboxes.component';
import { AppInputComponent } from './components/app-input/app-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookingTicketComponent } from './components/booking-ticket/booking-ticket.component';
import { TourlistComponent } from './components/tourlist/tourlist.component';
import { MyTitlePipe } from './my-title.pipe';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { CartComponent } from './components/cart/cart.component';
import {DataService} from './services/data.service';
import {LogService} from './services/log.service';
import { ParentAgendaComponent } from './components/parent-agenda/parent-agenda.component';
import { ChildAgendaComponent } from './components/parent-agenda/child-agenda/child-agenda.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import {AdminModuleModule} from './admin-module/admin-module.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {fakeBackendProvider} from './helpers/fake-backend';
import {AlertComponent} from './components/alert/alert.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckboxesComponent,
    AppInputComponent,
    CheckboxesComponent,
    MainPageComponent,
    FooterComponent,
    BookingComponent,
    BookingTicketComponent,
    TourlistComponent,
    MyTitlePipe,
    CartComponent,
    ParentAgendaComponent,
    ChildAgendaComponent,
    AdminModuleComponent,
    AlertComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AdminModuleModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    LogService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

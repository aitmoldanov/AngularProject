import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookingComponent} from './components/booking/booking.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {BookingTicketComponent} from './components/booking-ticket/booking-ticket.component';
import {TourlistComponent} from './components/tourlist/tourlist.component';
import {CartComponent} from './components/cart/cart.component';
import {ParentAgendaComponent} from './components/parent-agenda/parent-agenda.component';

const routes: Routes = [
  {
    path: '',
  component: MainPageComponent
  },
  { path: 'app-booking',
    component: BookingComponent
  },
  { path: 'app-booking-ticket',
    component: BookingTicketComponent
  },
  {
    path: 'app-tourlist',
    component: TourlistComponent
  },
  {
    path: 'app-cart',
    component: CartComponent
  },
  {
    path: 'app-parent-agenda',
    component: ParentAgendaComponent
  },
  { path: 'adminModule', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

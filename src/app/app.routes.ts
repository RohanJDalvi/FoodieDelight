import { RouterModule, Routes } from '@angular/router';
import { RestaurantFormComponent } from '../components/restaurant-form/restaurant-form.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RestaurantListComponent } from '../components/restaurant-list/restaurant-list.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'restaurants', component: RestaurantListComponent, canActivate: [AuthGuard] },
  { path: 'restaurants/add', component: RestaurantFormComponent, canActivate: [AuthGuard] },
  { path: 'restaurants/edit/:id', component: RestaurantFormComponent, canActivate: [AuthGuard] },
  { path: 'restaurants/:id', component: RestaurantFormComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export { routes };

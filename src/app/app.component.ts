import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "../components/login/login.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "../components/home/home.component";
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantFormComponent } from "../components/restaurant-form/restaurant-form.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsComponent } from '../components/form/toasts/toasts.component';
import { ToasterService } from '../services/toaster.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule,ToastsComponent, NgbModule, HttpClientModule, LoginComponent, HomeComponent, RestaurantFormComponent,ReactiveFormsModule],
  providers:[ToasterService,RestaurantService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodieDelight';
}

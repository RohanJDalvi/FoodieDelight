import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';
import { CommonModule } from '@angular/common';
import { ToasterService } from '../../services/toaster.service';
import { ToastType } from '../../models/toastInfo';
import { ToastsComponent } from "../form/toasts/toasts.component";

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RouterModule, CommonModule, ToastsComponent],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router, private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getAllRestaurants().subscribe(
      (data) => {
        this.restaurants = data;
      }
    );
  }

  editRestaurant(id: number): void {
    this.router.navigate(['/restaurants/edit', id]);
  }

  deleteRestaurant(id: number): void {
    if (confirm('Are you sure you want to delete this restaurant?')) {
      this.restaurantService.deleteRestaurant(id).subscribe(
        () => {
          this.getRestaurants(); 
        }
      );
      this.toasterService.show('Restaurant deleted successfully',ToastType.Success);
    }
  }
}

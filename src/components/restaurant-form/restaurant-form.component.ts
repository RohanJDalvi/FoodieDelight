import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToasterService } from '../../services/toaster.service';
import { ToastType } from '../../models/toastInfo';
import { ToastsComponent } from "../form/toasts/toasts.component";

@Component({
  selector: 'app-restaurant-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastsComponent],
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  isEditMode = false;
  restaurant: Restaurant = { id: 0, name: '', description: '', location: '', category: '' };

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private toasterService : ToasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.restaurantService.getRestaurantById(+id).subscribe(
        (restaurant) => {
          this.restaurant = restaurant;
        }
      );
      
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return; 
    }

    if (this.isEditMode) {
      this.restaurantService.updateRestaurant(this.restaurant.id, this.restaurant).subscribe(
        response => {
          this.router.navigate(['/restaurants']);
        }
      );
      this.toasterService.show('Restaurant updated successfully', ToastType.Success);
    } else {
      this.restaurantService.addRestaurant(this.restaurant).subscribe(
        response => {
          form.resetForm(); 
          this.router.navigate(['/restaurants']); 
        }
      );
      this.toasterService.show('Restaurant added successfully', ToastType.Success);
    }
  }
}
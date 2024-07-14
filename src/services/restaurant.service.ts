import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl = 'https://localhost:7276/api/restaurants'; 

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.baseUrl}/${id}`);
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.baseUrl, restaurant);
  }

  updateRestaurant(id: number, restaurant: Restaurant): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, restaurant);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

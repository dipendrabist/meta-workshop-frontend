import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
private baseUrl = 'http://localhost:8086/v1/food';
  constructor(private http: HttpClient) { }
 getFood(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFood(food: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, food);
  }

  updateFood(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFood(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFoodsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

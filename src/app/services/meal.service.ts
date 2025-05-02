import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {


  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s'; 

    return this.http.get<any>(apiUrl);
  }

  getRecipe(id: number): Observable<any> {
    const apiUrl = 'www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
    return this.http.get<any>(apiUrl);
  }

  
}

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
// get recipe par id 
  getRecipe(id: number): Observable<any> {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    return this.http.get<any>(apiUrl);
  }
  // une fonction de recherche
  searchRecipes(query: string): Observable<any> {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  }
  
  

  
}

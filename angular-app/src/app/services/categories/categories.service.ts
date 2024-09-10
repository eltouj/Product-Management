import { Injectable } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  create_new_category(category: any):Observable<any> {
    
    return this.http.post(this.url+'api/category/add', category);
  }
  
 
}


 



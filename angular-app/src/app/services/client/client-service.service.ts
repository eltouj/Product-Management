import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  create_new_client(client: any):Observable<any> {
    
    return this.http.post(this.url+'api/user/add', client);
  }
  
 
}


 


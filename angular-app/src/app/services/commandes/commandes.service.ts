import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  private url = 'http://127.0.0.1:8000/';
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) { }
  deleteCommande(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/commandes/${id}`);
  }

  get_commande():Observable<any> {
    
    return this.http.get(this.url+'api/affjsn');

  }

}


 



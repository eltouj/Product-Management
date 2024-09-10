import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LigneDeCommandeService {

  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  create_new_l_commande(lcommande: any):Observable<any> {
    
    return this.http.post(this.url+'api/commande/add', lcommande);
    
  }
  get_commande():Observable<any> {
    
    return this.http.get(this.url+'api/affjsn');
  
 
}}


 



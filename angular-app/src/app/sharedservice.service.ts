// sharedservice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  private url: string ='http://127.0.0.1:8000/'; 

  constructor(private http: HttpClient) { }
  client={
    id:'',
    name:'User-Name'
  }
   ngOnInit(){
    console.log(this.client.name)

  }


  get_commande(): Observable<any> {
    return this.http.get(this.url + 'api/affjsn');
  }
}

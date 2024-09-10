import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  create_new_product(product: any, selectedFile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('titre', product.titre);
    formData.append('img_url', selectedFile, selectedFile.name);
    formData.append('prix', product.prix);
    formData.append('description', product.description);
    formData.append('category_id', product.category_id);
    formData.append('discount', product.discount);
    formData.append('color', product.color);

    return this.http.post(this.url + 'api/produits/ad', formData);
  }
}


 


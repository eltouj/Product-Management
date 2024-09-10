import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class AppChipsComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  categories: any = '';
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  product = {
    titre: '',
    prix: '',
    description: '',
    category_id: '1',
    discount: '',
    color: ''
  };

  constructor(public shared: ProductsService, public _shared: SharedserviceService) {}

  ngOnInit(): void {
    this._shared.get_commande().subscribe(
      (data) => {
        this.categories = data.categories;
        console.log('categories:', this.categories);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  selected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onCategoryChange(event: any) {
    this.product.category_id = event.target.value;
    console.log('Selected category ID:', this.product.category_id);
  }

  onColorSelect(color: string) {
    this.product.color = color;
    console.log('Selected color:', this.product.color);
  }

  ajout_produit() {
    if (this.selectedFile) {
      this.shared.create_new_product(this.product, this.selectedFile).subscribe(
        res => {
          console.log(res);
          this.product = {
            titre: '',
            prix: '',
            description: '',
            category_id: '',
            discount: '',
            color: ''
          };
          this.selectedFile = null;
          this.imageUrl = null;
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error('No file selected');
    }
  }
}

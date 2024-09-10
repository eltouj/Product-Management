import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from 'src/app/product-modal/product-modal.component';
import { LigneDeCommandeService } from 'src/app/services/ligne_de_commande/ligne-de-commande.service';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lcommande.component.scss'

})


export class AppListsComponent {
  constructor(public _shared:LigneDeCommandeService,public dialog: MatDialog,public shared: SharedserviceService,   private router: Router,){}
  ligne_de_commande={
    user_id:'',
    product_id:'',
    quantite:0

  }
  ajout_ligne()
  {
    this._shared.create_new_l_commande(this.ligne_de_commande).subscribe(res=>{
      console.log(res)
    })
    this.ligne_de_commande.user_id='';
    this.ligne_de_commande.product_id='';
    this.ligne_de_commande.quantite=0;
  }
  users: any;
  produits : any;

  ngOnInit(): void {
    this._shared.get_commande().subscribe(res => {
      this.users = res.users ;
      this.produits=res.produits;
      console.log(this.users)
      console.log(this.produits)

    if (this.shared.client.id==''){
      this.router.navigate(['/authentication/login']);
    }
    this.ligne_de_commande.user_id=this.shared.client.id
    });
  }
  openProductModal(produit: any): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '20%',
      data: { productTitle: produit.titre,
        product_id: produit.id
       }
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        this.ligne_de_commande.quantite=result
        this.ligne_de_commande.product_id = produit.id;
        console.log(this.ligne_de_commande.product_id)
        console.log(this.ligne_de_commande.quantite)
        this._shared.create_new_l_commande(this.ligne_de_commande).subscribe(res=>{
          console.log(res)
        })
        this.ligne_de_commande.user_id='';
        this.ligne_de_commande.product_id='';
        this.ligne_de_commande.quantite=0;
      }
    });

    
  }
}
 





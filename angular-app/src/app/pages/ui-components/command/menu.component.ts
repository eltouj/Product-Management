import { Component, OnInit } from '@angular/core';
import { CommandesService } from 'src/app/services/commandes/commandes.service';
import { Commande, Produit, User } from './models';  
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./commande.component.scss']
})
export class AppMenuComponent implements OnInit {
  commandes: Commande[] = [];
  produits: Produit[] = [];
  users: User[] = [];
  name_imp='';  

  constructor(private shared_com: CommandesService, public _shared: SharedserviceService) { }

  deleteCommand(id: number) {
    this.shared_com.deleteCommande(id).subscribe(response => {
      this.commandes = this.commandes.filter(commande => commande.id !== id);
    }, error => {
      console.error('Error deleting command:', error);
    });
  }

  ngOnInit(): void {
    this.name_imp = this._shared.client.name; 

    this.shared_com.get_commande().subscribe(res => {
      this.commandes = res.commandes;
      this.produits = res.produits;
      this.users = res.users;
      console.log(this.users);
    });
  }
}

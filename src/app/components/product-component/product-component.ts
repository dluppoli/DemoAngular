import { ChangeDetectorRef, Component } from '@angular/core';
import { ShopService } from '../../services/shop-service';
import { ActivatedRoute } from '@angular/router';
import { ProductComplete } from '../../models/ProductComplete';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-component',
  imports: [CommonModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {

  product:ProductComplete | undefined;

  constructor(private shopService:ShopService, private route:ActivatedRoute, cd:ChangeDetectorRef)
  {
    let id = parseInt(this.route.snapshot.params['id'])
    shopService.getOne(id).subscribe(p => {
      this.product = p
      cd.detectChanges()
    })
    
  }

  acquista()
  {
    if( this.product != undefined )
      this.shopService.addCarrello(this.product)  
  }
}

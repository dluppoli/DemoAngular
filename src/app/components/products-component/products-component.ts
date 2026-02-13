import { ChangeDetectorRef, Component } from '@angular/core';
import { ShopService } from '../../services/shop-service';
import { ProductSmall } from '../../models/ProductSmall';
import { Products } from '../../models/Products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-component',
  imports: [CommonModule],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent {

  products:Products | undefined

  constructor(private shopService:ShopService, private cd:ChangeDetectorRef){
    this.shopService.getAll()
      .subscribe(p => 
      {
        this.products=p
        cd.detectChanges()
      })
  }
}

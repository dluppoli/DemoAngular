import { Component } from '@angular/core';
import { ShopService } from '../../services/shop-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
  constructor(private shopService:ShopService, private route:ActivatedRoute)
  {
    console.log(route.snapshot.params['id'])
  }
}

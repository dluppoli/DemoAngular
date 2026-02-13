import { Component } from '@angular/core';
import { ShopService } from '../../services/shop-service';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  constructor(public shopService:ShopService) { }
}

import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products-component/products-component';
import { ProductComponent } from './components/product-component/product-component';

export const routes: Routes = [
    { path:"", component:ProductsComponent },
    { path:"products/:id", component:ProductComponent}
];

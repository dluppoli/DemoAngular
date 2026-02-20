import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products-component/products-component';
import { ProductComponent } from './components/product-component/product-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';

export const routes: Routes = [
    { path:"", component:ProductsComponent },
    { path:"products/:id", component:ProductComponent},
     { path:"**", component:NotFoundComponent}
];

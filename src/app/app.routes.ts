import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BookComponent } from './components/book/book.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'about', component: AboutComponent },
    { path:'isbn/:isbn', component: BookComponent },
    { path:'**', component: NotfoundComponent }
];

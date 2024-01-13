import { Routes } from '@angular/router';
import { HomeComponent } from './webpage/components/home/home.component';
import { ProductComponent } from './webpage/components/product/product.component';
import { CategoryComponent } from './webpage/components/category/category.component';
import { CheckOutComponent } from './webpage/components/check-out/check-out.component';
import { AboutComponent } from './webpage/components/about/about.component';
import { ConvertcurrencyComponent } from './webpage/components/convertcurrency/convertcurrency.component';
import { LoginComponent } from './webpage/components/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'checkout', component: CheckOutComponent },
    { path: 'about', component: AboutComponent },
    { path: 'convertcurrency', component: ConvertcurrencyComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

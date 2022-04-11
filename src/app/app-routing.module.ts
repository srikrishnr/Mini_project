import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
{ path: '',   redirectTo: '/', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{path:'about-us',component: AboutUsComponent},
{path:'contact-us',component: ContactUsComponent},
{path:'login',component:LoginComponent},
{path:'create-account',component:CreateAccountComponent}
// //{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
// { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

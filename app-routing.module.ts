import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DirectivepipeComponent } from './directivepipe/directivepipe.component';
import { EeditComponent } from './eedit/eedit.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactivevalidationComponent } from './reactivevalidation/reactivevalidation.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TemplatevalidationComponent } from './templatevalidation/templatevalidation.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"templateform",
    component:TemplateformComponent
  },
  {
    path:"reactiveform",
    component:ReactiveformComponent
  },
  {
    path:"templatevalidation",
    component:TemplatevalidationComponent
  },
  {
    path:"reactivevalidation",
    component:ReactivevalidationComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"product",
    component:ProductComponent
  },

  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"productdetails/:name",
    component:ProductdetailsComponent
  },
  {
    path:"eedit",
    component:EeditComponent
  },
  {
    path:"dpipe",
    component:DirectivepipeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path : '**',
    component : WildcardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

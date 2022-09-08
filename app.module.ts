import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { EmployeeComponent } from './employee/employee.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplatevalidationComponent } from './templatevalidation/templatevalidation.component';
import { ReactivevalidationComponent } from './reactivevalidation/reactivevalidation.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { EeditComponent } from './eedit/eedit.component';
import { DirectivepipeComponent } from './directivepipe/directivepipe.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    EmployeeComponent,
         TemplateformComponent,
         ReactiveformComponent,
         TemplatevalidationComponent,
         ReactivevalidationComponent,
         RoutingComponent,
         HomeComponent,
         ProductComponent,
         ContactComponent,
         ProductdetailsComponent,
         EeditComponent,
         DirectivepipeComponent,
         LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
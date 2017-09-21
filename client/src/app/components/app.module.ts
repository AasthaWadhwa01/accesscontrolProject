import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
/*import { Ir71Component } from './ir71/ir71.component';*/
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { HrComponent } from './hr/hr.component';
import { CsoComponent } from './cso/cso.component';
import { CisoComponent } from './ciso/ciso.component';
import { CategoryComponent } from './category/category.component';
import { AcessTypeComponent } from './accesstype/acesstype.component';
import { ThirdPartyComponent} from './thirdparty/thirdparty.component';
import { ControlAccessService } from '../services/control-access.service';
import {ThirdPartyService} from '../services/third-party.service' ;

import { LocationChangeComponent } from './location-change/location-change.component';
import { LocationChangeService } from '../services/location-change.service';
import { DamagecardService } from '../services/damagecard.service';
import { DamagecardComponent } from './damagecard/damagecard.component';
import { LostCardService } from '../services/lost-card.service';
import { LostCardComponent } from './lost-card/lost-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupervisordashboardComponent } from './supervisordashboard/supervisordashboard.component';
import { HrdashboardComponent } from './hrdashboard/hrdashboard.component';
import { CsodashboardComponent } from './csodashboard/csodashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    /*Ir71Component,*/
    LoginComponent,
    RegisterComponent,
    AccessControlComponent,
    NavbarComponent,
    FooterComponent,
    EmployeeComponent,
    SupervisorComponent,
    HrComponent,
    CsoComponent,
    CisoComponent,
    CategoryComponent,
    AcessTypeComponent,
    ThirdPartyComponent,
    LocationChangeComponent,
    DamagecardComponent,
    LostCardComponent,
    DashboardComponent,
    SupervisordashboardComponent,
    HrdashboardComponent,
    CsodashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
  {
      path:'',redirectTo:'/access',pathMatch:'full'
    },
    {
       path:'location',
       component:LocationChangeComponent
     },
      {
       path:'supervisor/:value',
       component:SupervisorComponent
     },
     {
        path:'category/:value',
        component:CategoryComponent
      },

 {
       path:'hr/:value',
       component:HrComponent
     },

 {
       path:'cso/:value',
       component:CsoComponent
     },


     {
       path:'damage',
       component:DamagecardComponent
     },
     {
       path:'access',
       component:AccessControlComponent
     },
     {
       path:'lost',
       component:LostCardComponent
     },

      {
        path: 'login', 
        component: LoginComponent
      },
      {
        path: 'thirdparty', 
        component: ThirdPartyComponent
      },
       {
        path: 'dashboard', 
        component: DashboardComponent
      },
     {
        path:'form',
        component:EmployeeComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'navbar',
        component:NavbarComponent
      },
       {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'cso',
        component:CsoComponent
      },
      {
        path:'acesstype',
        component:AcessTypeComponent
      },
       {
        path:'superdash',
        component:SupervisordashboardComponent
      },
       {
        path:'hrdash',
        component:HrdashboardComponent
      },
       {
        path:'csodash',
        component:CsodashboardComponent
      },

      ])
  ],
  providers: [ControlAccessService , ThirdPartyService, LocationChangeService, DamagecardService, LostCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

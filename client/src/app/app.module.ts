import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CentralaccessComponent } from './components/centralaccess/centralaccess.component';
import { AccesstypeComponent } from './components/centralaccess/accesstype/accesstype.component';
import { SupervisorComponent } from './components/centralaccess/supervisor/supervisor.component';
import { HrComponent } from './components/centralaccess/hr/hr.component';
import { CsoComponent } from './components/centralaccess/cso/cso.component';
import { CisoComponent } from './components/centralaccess/ciso/ciso.component';
import { EmployeedashboardComponent } from './components/centralaccess/employeedashboard/employeedashboard.component';
import { LoginComponent } from './components/centralaccess/login/login.component';
import { SupervisorformComponent } from './components/centralaccess/supervisor/supervisorform/supervisorform.component';
import { SupervisordashboardComponent } from './components/centralaccess/supervisor/supervisordashboard/supervisordashboard.component';
import { HrformComponent } from './components/centralaccess/hr/hrform/hrform.component';
import { HrdashboardComponent } from './components/centralaccess/hr/hrdashboard/hrdashboard.component';
import { CsoformComponent } from './components/centralaccess/cso/csoform/csoform.component';
import { CsodashboardComponent } from './components/centralaccess/cso/csodashboard/csodashboard.component';
import { CisoformComponent } from './components/centralaccess/ciso/cisoform/cisoform.component';
import { CisodashboardComponent } from './components/centralaccess/ciso/cisodashboard/cisodashboard.component';
import { NewaccessComponent } from './components/centralaccess/accesstype/newaccess/newaccess.component';
import { LostcardComponent } from './components/centralaccess/accesstype/lostcard/lostcard.component';
import { DamagecardComponent } from './components/centralaccess/accesstype/damagecard/damagecard.component';
import { LocationchangeComponent } from './components/centralaccess/accesstype/locationchange/locationchange.component';
import { ThirdpartyComponent } from './components/centralaccess/accesstype/thirdparty/thirdparty.component';

@NgModule({
  declarations: [
    AppComponent,
    CentralaccessComponent,
    AccesstypeComponent,
    SupervisorComponent,
    HrComponent,
    CsoComponent,
    CisoComponent,
    EmployeedashboardComponent,
    LoginComponent,
    SupervisorformComponent,
    SupervisordashboardComponent,
    HrformComponent,
    HrdashboardComponent,
    CsoformComponent,
    CsodashboardComponent,
    CisoformComponent,
    CisodashboardComponent,
    NewaccessComponent,
    LostcardComponent,
    DamagecardComponent,
    LocationchangeComponent,
    ThirdpartyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

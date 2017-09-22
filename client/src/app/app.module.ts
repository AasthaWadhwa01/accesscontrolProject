import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AccessformsComponent } from './components/accessforms/accessforms.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { HrComponent } from './components/hr/hr.component';
import { CsoComponent } from './components/cso/cso.component';
import { CisoComponent } from './components/ciso/ciso.component';
import { LoginComponent } from './login/login.component';
import { NewAccessComponent } from './components/accessforms/new-access/new-access.component';
import { LostCardComponent } from './components/accessforms/lost-card/lost-card.component';
import { DamagedCardComponent } from './components/accessforms/damaged-card/damaged-card.component';
import { LocationChangeComponent } from './components/accessforms/location-change/location-change.component';
import { ThirdPartyComponent } from './components/accessforms/third-party/third-party.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AccessformsComponent,
    EmployeeDashboardComponent,
    SupervisorComponent,
    HrComponent,
    CsoComponent,
    CisoComponent,
    LoginComponent,
    NewAccessComponent,
    LostCardComponent,
    DamagedCardComponent,
    LocationChangeComponent,
    ThirdPartyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }

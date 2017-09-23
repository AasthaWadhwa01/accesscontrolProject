import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { SupervisorFormComponent } from './components/supervisor/supervisor-form/supervisor-form.component';
import { SupervisorDashboardComponent } from './components/supervisor/supervisor-dashboard/supervisor-dashboard.component';
import { HrDashboardComponent } from './components/hr/hr-dashboard/hr-dashboard.component';
import { HrFormComponent } from './components/hr/hr-form/hr-form.component';
import { CsoFormComponent } from './components/cso/cso-form/cso-form.component';
import { CsoDashboardComponent } from './components/cso/cso-dashboard/cso-dashboard.component';
import { CisoFormComponent } from './components/ciso/ciso-form/ciso-form.component';
import { CisoDashboardComponent } from './components/ciso/ciso-dashboard/ciso-dashboard.component';

@NgModule({
  declarations: [
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
    ThirdPartyComponent,
    SupervisorFormComponent,
    SupervisorDashboardComponent,
    HrDashboardComponent,
    HrFormComponent,
    CsoFormComponent,
    CsoDashboardComponent,
    CisoFormComponent,
    CisoDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }

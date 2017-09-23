import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
import { EmployeeService } from './services/employee.service';
import { DamagedCardService } from './services/damaged-card.service';
import { LocationChangeService } from './services/location-change.service';
import { LostCardService } from './services/lost-card.service';
import { ThirdPartyService } from './services/third-party.service';

const routes: any = [
	{
		path: '', redirectTo: '/login', pathMatch: 'full'
	},
  {
    path: 'login',
    component: LoginComponent
  },
	{
		path: 'accessforms',
		component: AccessformsComponent
	},
  {
    path: 'newaccess',
    component: NewAccessComponent
  },
  {
    path: 'damage',
    component: DamagedCardComponent
  },
  {
    path: 'lost',
    component: LostCardComponent
  },
  {
    path: 'location',
    component: LocationChangeComponent
  },
  {
    path: 'thirdparty',
    component: ThirdPartyComponent
  },
  {
    path: 'empdash',
    component: EmployeeDashboardComponent
  },
  {
    path: 'hr',
    component: HrComponent
  },
  {
    path: 'hrform',
    component: HrFormComponent
  },
  {
    path: 'hrdash',
    component: HrDashboardComponent
  },
  {
    path: 'supervisor',
    component: SupervisorComponent
  },
  {
    path: 'superform',
    component: SupervisorFormComponent
  },
  {
    path: 'superdash',
    component: SupervisorDashboardComponent
  },
  {
    path: 'cso',
    component: CsoComponent
  },
  {
    path: 'csoform',
    component: CsoFormComponent
  },
  {
    path: 'csodash',
    component: CsoDashboardComponent
  },
  {
    path: 'ciso',
    component: CisoComponent
  },
  {
    path: 'cisoform',
    component: CisoFormComponent
  },
  {
    path: 'cisodash',
    component: CisoDashboardComponent
  },
]

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
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService, DamagedCardService, LocationChangeService, LostCardService, ThirdPartyService],
  bootstrap: [LoginComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { ComponentsComponent } from './components/components.component';
import { AccessformsComponent } from './components/accessforms/accessforms.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { HrComponent } from './components/hr/hr.component';
import { CsoComponent } from './components/cso/cso.component';
import { LoginComponent } from './components/login/login.component';
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
import { EmployeeService } from './services/employee.service';
import { DamagedCardService } from './services/damaged-card.service';
import { LocationChangeService } from './services/location-change.service';
import { LoginService } from './services/login.service'
import { LostCardService } from './services/lost-card.service';
import { ThirdPartyService } from './services/third-party.service';
import { ReportService } from './services/report.service';
import { ExcelService } from './services/excel.service';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const routes: any = [
	{
		path: '', redirectTo: 'login/526ad82d-f303-4ea4-a265-52135a509028', pathMatch: 'full',
    //component: LoginComponent
	},
  {
    path: 'login/:value',
    component: LoginComponent
  },
   {
    path: 'newaccess/:value',
    component: NewAccessComponent
  },
   {
    path: 'hr/:value',
    component: HrFormComponent
  },
   {
    path: 'super/:value',
    component: SupervisorFormComponent
  },
   {
    path: 'cso/:value',
    component: CsoFormComponent
  },
	{
		path: 'accessforms/:value',
		component: AccessformsComponent
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
   path: 'errorpage',
   component: ErrorpageComponent
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
    path: 'hrform/:value',
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
    path: 'superform/:value',
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
    path: 'csoform/:value',
    component: CsoFormComponent
  },
 
  {
    path: 'csodash',
    component: CsoDashboardComponent
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
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, EmployeeService, DamagedCardService, LocationChangeService, LostCardService, ThirdPartyService,ReportService,ExcelService],
  bootstrap: [ComponentsComponent]
})
export class AppModule { }

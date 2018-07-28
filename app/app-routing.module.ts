import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentregistationComponent } from './studentregistation/studentregistation.component';
import { StdMedicalRegistrationComponent } from './std-medical-registration/std-medical-registration.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StdRegComponent } from './std-reg/std-reg.component';
import { FathersparticularComponent } from './fathersparticular/fathersparticular.component';
import { MothersparticularComponent } from './mothersparticular/mothersparticular.component';
import { ParticularoflegalguardianComponent } from './particularoflegalguardian/particularoflegalguardian.component';
import { ParticularofsibilingsComponent } from './particularofsibilings/particularofsibilings.component';
import { LoginComponent } from './login/login.component';
import { ChildeducationbackgroundComponent } from './childeducationbackground/childeducationbackground.component';
import { MedicalAlliedHealthProfInvolComponent } from './medical-allied-health-prof-invol/medical-allied-health-prof-invol.component';
import { BasicqueriesComponent } from './basicqueries/basicqueries.component';

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forRoot([
     
     
      
     
      {path:'',component:DashboardComponent},
      {path:'Dashboard',component:DashboardComponent}, 
      {path:'StdRegistration',component:StudentregistationComponent},
      {path:'StdMedicalRegistration',component:StdMedicalRegistrationComponent},
      {path:'StdDetails',component:StudentdetailsComponent},
      {path:'Assessment',component:AssessmentComponent},
      {path:'StdReg',component:StdRegComponent},
      {path:'FatherDetails',component:FathersparticularComponent},
      {path:'MotherDetails',component:MothersparticularComponent},
      {path:'GuardianDetails',component:ParticularoflegalguardianComponent},
      {path:'SibilingDetails',component:ParticularofsibilingsComponent},
      {path:'ChildEducationBackground',component:ChildeducationbackgroundComponent},
      {path:'MedicalAndAlliedHealthProf',component:MedicalAlliedHealthProfInvolComponent},
      {path:'BasicQueries',component:BasicqueriesComponent},
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}



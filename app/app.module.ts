import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IStd} from './StdDetails';
import 'hammerjs';


import { AppComponent } from './app.component';
import { StudentregistationComponent } from './studentregistation/studentregistation.component';
import { FathersparticularComponent } from './fathersparticular/fathersparticular.component';
import { MothersparticularComponent } from './mothersparticular/mothersparticular.component';
import { ParticularoflegalguardianComponent } from './particularoflegalguardian/particularoflegalguardian.component';
import { ParticularofsibilingsComponent } from './particularofsibilings/particularofsibilings.component';
import { ChildeducationbackgroundComponent } from './childeducationbackground/childeducationbackground.component';
import { HealthinvolementComponent } from './healthinvolement/healthinvolement.component';
import { BasicqueriesComponent } from './basicqueries/basicqueries.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { StdMedicalRegistrationComponent } from './std-medical-registration/std-medical-registration.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { StdRegComponent } from './std-reg/std-reg.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentService } from './student.service';
import { ChildEduBackgroudComponent } from './child-edu-backgroud/child-edu-backgroud.component';
import { MedicalAlliedHealthProfInvolComponent } from './medical-allied-health-prof-invol/medical-allied-health-prof-invol.component';
import { BasicQueriesComponent } from './basic-queries/basic-queries.component';
import { ContentbarComponent } from './contentbar/contentbar.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentregistationComponent,
    FathersparticularComponent,
    MothersparticularComponent,
    ParticularoflegalguardianComponent,
    ParticularofsibilingsComponent,
    ChildeducationbackgroundComponent,
    HealthinvolementComponent,
    BasicqueriesComponent,
    StudentdetailsComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    StdMedicalRegistrationComponent,
    AssessmentComponent,
    StdRegComponent,
    LoginComponent,
    ChildEduBackgroudComponent,
    MedicalAlliedHealthProfInvolComponent,
    BasicQueriesComponent,
    ContentbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FindComponent } from './components/requester/find/find.component';
import { GuestComponent } from './components/requester/guest/guest.component';
import { NeedHelpComponent } from './components/requester/need-help/need-help.component';
import { NeedhelpSpaceComponent } from './components/requester/needhelp-space/needhelp-space.component';
import { NewHelpRequestComponent } from './components/requester/new-help-request/new-help-request.component';
import { RequesterRequestsComponent } from './components/requester/requester-requests/requester-requests.component';
import { GoComponent } from './components/shared/go/go.component';
import { HomePageComponent } from './components/shared/home-page/home-page.component';
import { LoginComponent } from './components/shared/login/login.component';
import { PersonalInformationComponent } from './components/shared/personal-information/personal-information.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { WelcomeComponent } from './components/shared/welcome/welcome.component';
import { AnswerToRequestsComponent } from './components/volunteer/answer-to-requests/answer-to-requests.component';
import { CommitsComponent } from './components/volunteer/commits/commits.component';
import { MitnadevSpaceComponent } from './components/volunteer/mitnadev-space/mitnadev-space.component';
import { MitnadevComponent } from './components/volunteer/mitnadev/mitnadev.component';
import { MyRequestComponent } from './components/volunteer/my-request/my-request.component';
import { ProfileComponent } from './components/volunteer/profile/profile.component';
import { RatingComponent } from './components/volunteer/rating/rating.component';
import { TypeOfVolunteeringComponent } from './components/volunteer/type-of-volunteering/type-of-volunteering.component';
import { VolunteerDetailesComponent } from './components/volunteer/volunteer-detailes/volunteer-detailes.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'wellcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-help-request', component: NewHelpRequestComponent },
  { path: 'new-help-request/:id', component: NewHelpRequestComponent },
  { path: 'volunteer-detailes', component: VolunteerDetailesComponent },
  { path: 'volunteer-detailes/:userId', component: VolunteerDetailesComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'find', component: FindComponent },
  { path: 'myrequest', component: MyRequestComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'requester-requests', component: RequesterRequestsComponent },
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'personal-information/:userId', component: PersonalInformationComponent },
  { path: 'type-of-volunteering', component: TypeOfVolunteeringComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'answer-to-requests', component: AnswerToRequestsComponent },

  { path: 'mitnadev', component: MitnadevComponent },
  { path: 'mitnadev/:userId', component: MitnadevComponent },
  { path: 'need-help', component: NeedHelpComponent },
  { path: 'need-help/:userId', component: NeedHelpComponent },
  
  { path: 'mitnadev-space', component: MitnadevSpaceComponent },
  { path: 'needhelp-space', component: NeedhelpSpaceComponent },
  { path: 'go', component: GoComponent },
  { path: 'commits', component: CommitsComponent },
  { path: 'commits/:volunteerId', component: CommitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

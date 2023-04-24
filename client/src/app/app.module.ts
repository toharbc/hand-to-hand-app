import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {HttpClientModule}from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { WelcomeComponent } from './components/shared/welcome/welcome.component'
import { RegisterComponent } from './components/shared/register/register.component'
import { NewHelpRequestComponent } from './components/requester/new-help-request/new-help-request.component'
import { MyRequestComponent } from './components/volunteer/my-request/my-request.component'
import { RequesterRequestsComponent } from './components/requester/requester-requests/requester-requests.component'
import { LoginComponent } from './components/shared/login/login.component'
import { VolunteerDetailesComponent } from './components/volunteer/volunteer-detailes/volunteer-detailes.component'
import { GuestComponent } from './components/requester/guest/guest.component'
import { ProfileComponent } from './components/volunteer/profile/profile.component'
import { TypeOfVolunteeringComponent } from './components/volunteer/type-of-volunteering/type-of-volunteering.component';
import { FindComponent } from './components/requester/find/find.component';
import { AnswerToRequestsComponent } from './components/volunteer/answer-to-requests/answer-to-requests.component';
import { PersonalInformationComponent } from './components/shared/personal-information/personal-information.component';
import { RatingComponent } from './components/volunteer/rating/rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MitnadevComponent } from './components/volunteer/mitnadev/mitnadev.component';
import { NeedHelpComponent } from './components/requester/need-help/need-help.component';
import { MitnadevSpaceComponent } from './components/volunteer/mitnadev-space/mitnadev-space.component'
import { NeedhelpSpaceComponent } from './components/requester/needhelp-space/needhelp-space.component';
import { GoComponent } from './components/shared/go/go.component';

import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'; 

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { HomePageComponent } from './components/shared/home-page/home-page.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultsOfSearchingComponent } from './components/requester/results-of-searching/results-of-searching.component';
import { TypesOfVolunteeringComponent } from './components/volunteer/types-of-volunteering/types-of-volunteering.component';
import { RatingReadonlyComponent } from './components/volunteer/rating-readonly/rating-readonly.component';
import { RequestDialogComponent } from './components/volunteer/request-dialog/request-dialog.component';
import { VolunteerDialogComponent } from './components/requester/volunteer-dialog/volunteer-dialog.component';
import { CommitsComponent } from './components/volunteer/commits/commits.component';
import { CommitComponent } from './components/volunteer/commit/commit.component';

import { MatTimepickerModule } from 'mat-timepicker';
import { EditTypeOfVolunteerDialogComponent } from './components/volunteer/edit-type-of-volunteer-dialog/edit-type-of-volunteer-dialog.component';
import { QuestionDialogComponent } from './components/volunteer/question-dialog/question-dialog.component';
import { ReturningButtonComponent } from './components/shared/returning-button/returning-button.component';
import { VolunteerComponent } from './components/requester/volunteer/volunteer.component';


const materialModules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  MatBadgeModule,
  MatGridListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatStepperModule,
  MatDialogModule
];

const bootstrapModules = [
  NgbRatingModule
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    NewHelpRequestComponent,
    MyRequestComponent,
    RequesterRequestsComponent,
    LoginComponent,
    VolunteerDetailesComponent,
    GuestComponent,
    ProfileComponent,
    TypeOfVolunteeringComponent,
    FindComponent,
    AnswerToRequestsComponent,
    PersonalInformationComponent,
    RatingComponent,
    MitnadevComponent,
    NeedHelpComponent,
    MitnadevSpaceComponent,
    NeedhelpSpaceComponent,
    GoComponent,
    HomePageComponent,
    HeaderComponent,
    ResultsOfSearchingComponent,
    TypesOfVolunteeringComponent,
    RatingReadonlyComponent,
    RequestDialogComponent,
    VolunteerDialogComponent,
    CommitsComponent,
    CommitComponent,
    EditTypeOfVolunteerDialogComponent,
    QuestionDialogComponent,
    ReturningButtonComponent,
    VolunteerComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    materialModules,
    NgbModule,
    bootstrapModules, 
    MatTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RequestDialogComponent,
    VolunteerDialogComponent, 
    EditTypeOfVolunteerDialogComponent, 
    QuestionDialogComponent
  ]
})


export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routesConfig: Routes = [
    { path: 'contacts', component: ContactsComponent },
    { path: 'detail', component: ContactDetailComponent},
    { path: '', redirectTo: '/contacts', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent},
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { ParentToChildComponent } from './parent_to_child.component';
import { Child1Component } from './child_1.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';
import { IpComponent } from './ip.component';
import { IpService } from './ip.service';
import { WeatherComponent } from './weather/weather.component';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from'./sign-up.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    ParentToChildComponent,
    Child1Component,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    WeatherComponent,
    SignInComponent,
    SignUpComponent,
    ContactsComponent,
    ContactDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routesConfig),
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

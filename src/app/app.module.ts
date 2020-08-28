import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './contact-list/contact-list.component';
import {AppRoutingModule} from './app-routing.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    ContactListComponent,
    ContactDetailsComponent,
    UpdateContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

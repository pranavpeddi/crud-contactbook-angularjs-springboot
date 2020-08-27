import {NgModule} from '@angular/core';
import {Routes,RouterModule} from  '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component'
import {CreateContactComponent} from './create-contact/create-contact.component';


const routes: Routes = [
    { path: 'contact', component: ContactListComponent },
    { path: 'add', component: CreateContactComponent }

  ];
  

  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })
  export class AppRoutingModule{}
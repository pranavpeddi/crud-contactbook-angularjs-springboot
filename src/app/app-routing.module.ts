import {NgModule} from '@angular/core';
import {Routes,RouterModule} from  '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component'
import {CreateContactComponent} from './create-contact/create-contact.component';
import {UpdateContactComponent} from './update-contact/update-contact.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';


const routes: Routes= [
    {path:'',redirectTo:'contact',pathMatch:'full'},
    { path: 'contacts', component: ContactListComponent },
    { path: 'add', component: CreateContactComponent },
    {path:'showdet/:id',component:ContactDetailsComponent},

    {path:'updateContact/:id',component:UpdateContactComponent}

  ];
  

  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })
  export class AppRoutingModule{}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
 contacts:Observable<Contact[]>

  constructor(private contactService:ContactService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.contacts=this.contactService.getEmployeeList();
  }


  deleteContact(id:number)
  {
 this.contactService.deleteContact(id)
 .subscribe(
   data=>{
     console.log(data);
     this.reloadData();
   },error=>console.log(error)
 )
  }

  

  contactDetails(id:number)
  {
this.router.navigate(['showdet',id]);
  }

  updateContact(id:number)
  {
    this.router.navigate(['updateContact',id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
 contacts:Observable<Contact[]>

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.contacts=this.contactService.getEmployeeList();
  }
}

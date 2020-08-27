import { Component, OnInit } from '@angular/core';
import {Contact} from '../Contact'
import {ContactService} from '../contact.service';
import { error } from '@angular/compiler/src/util';
import {Router} from '@angular/router'


@Component({
  selector: 'app-create',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
  providers:[ContactService]
})
export class CreateContactComponent implements OnInit {

  contact:Contact=new Contact();
  constructor(private ContactService:ContactService,private router:Router) { }
submitted=false;
  ngOnInit(): void {
  }

  save()
  {
    this.ContactService.createContact(this.contact).subscribe(data=>{
      console.log(data);
      this.contact=new Contact();
      this.router.navigate(['/contact'])
    },error=>console.log(error.message));
  }

  onSubmit()
  {
   
    this.submitted=true;
    this.save();
  }

}

import { Component, OnInit } from '@angular/core';
import {Contact} from '../Contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
 id:number;
 contact:Contact

  constructor(private route:ActivatedRoute,private router:Router,
    private contactService:ContactService) { }
 
  ngOnInit(): void {
    this.contact=new Contact();
    this.id=this.route.snapshot.params['id'];
    this.contactService.getContact(this.id)
    .subscribe(data=>{
      console.log(data); 
      this.contact=data;
    },error=>console.log(error))
  }


   list()
   {
     this.router.navigate(['contacts']);
   }
}

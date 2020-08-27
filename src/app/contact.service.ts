import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class ContactService
{
    private baseUrl='http://localhost:8080/';
    constructor(private http:HttpClient)
    {

    }

    createContact(contact:Object) :Observable<Object>
    {
        return this.http.post(`${this.baseUrl}/contacts`,contact);
    }

     getEmployeeList():Observable<any>
     {
         return this.http.get(`${this.baseUrl}/contacts`);
     }
     
     getContact(id:number):Observable<any>
     {
         return this.http.get(`${this.baseUrl}/contact/${id}`);
     }

    
}

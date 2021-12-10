import { Component } from '@angular/core';
import { FormBuilder,FormControlName,FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
@Injectable({
  providedIn: 'root'
})

export class ContactComponent {

  private webUrl = " http://73.19.65.35:3500/api";
  
  chatForm:FormGroup;
  post :any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    
      this.chatForm = this.formBuilder.group({
      userName: formBuilder.control(''),
      message : formBuilder.control(''),
      id: formBuilder.control(''),
      createdOn:formBuilder.control(''),
      updatedOn:formBuilder.control(''),

    });
    
  
  

   }
   getChatForms(){
    //headers
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.http.get<any[]>(`${this.webUrl}/channel`);
  }

  creatPost(post:any):Observable <any> {
    return this.http.post<any>(`${this.webUrl}/channel/rmarin`,JSON.stringify(post));
  }

// update
    patchPost(body:any):Observable <any> {
  return this.http.patch<any>(`${this.webUrl}/channel/rmarin`,body)
    }
  
  
    // delete
    deletePost(name:string): Observable<any>{
      return this.http.delete<any>(`${this.webUrl}channel//rmarin/${name}`);
    }
   
  ngOnInit() {
   
  }
  
   public onSubmit(){
    console.log(this.chatForm.value)
}
}  


//Unsuccessdful :(  I was able to display in console

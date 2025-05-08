import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration-form';
  displayname = 'Angular 14 Registration Form';
  displayemail = 'Email Address';
  displaycontact = 'contact';

  getvalue(name:string, email:string, password:string){
    this.displayname = name;
    this.displayemail = email;  
    this.displaycontact = password;
  }
}

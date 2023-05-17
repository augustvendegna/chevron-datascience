
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'websiteOne';
  
  public isSignedin: boolean;
  public login: LoginComponent;

  constructor(){
    this.isSignedin = false;
    this.login = new LoginComponent;
    
  }

}

import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string;
  public password: string;
  public clickedSignUp: boolean;
  // const { Pool, Client } = require("pg"); // idk what that is
  //Client = require("pg");
  dbCreds = {
    user: "postgres",
    host: "localhost",
    database: "users",
    port: 5432,
  };

  constructor(){
    this.clickedSignUp = false;
  }
  
  public onSignUpClick(){
    
    this.clickedSignUp = true;
    console.log(this.clickedSignUp);
    
  }

  public login() {
    //console.log('Username: ' + this.username);
    //console.log('Password: ' + this.password);
    
    //this.writeCreds();
  }

  // async writeCreds(){
  //   const client = new this.Client(this.dbCreds);
  //   await client.connect();
  //   const now = await client.query("SELECY * FROM users");
  //   await client.end();
  //   console.log(now);
  //   return now;
  // }


}

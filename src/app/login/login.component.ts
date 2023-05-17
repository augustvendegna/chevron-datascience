import { NgModule, Component, ContentChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public validInfo: boolean;
  public first: string;
  public last: string;
  public email: string;
  public password: string;
  public passwordOne: string;
  public passwordTwo: string;
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
    this.validInfo = true;
  }
 
  public onSignUpClick(){
    
    this.clickedSignUp = true;
    console.log(this.clickedSignUp);
    
  }

  public createAccount(){
    console.log("user wants to create account");

    if (this.first == null || this.last == null || this.email == null || this.passwordOne == null || this.passwordTwo == null) {
      console.log("Empty fields found.")
      this.validInfo = false;
    }

    if (this.email.includes('@chevron.com')){
      console.log("Email is valid");
      
    }
    else{
      console.log("Email does not belong to chevron!");
      this.validInfo = false;
    }

    if (this.passwordOne === this.passwordTwo && this.passwordOne != null) {
      console.log("Provided passwords match!");
      
    }
    else{
      console.log("Passwords do not match!");
      this.validInfo = false;
    }

    if (this.validInfo){
      console.log("Sending information to database.");
    }

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

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginform !:FormGroup
  constructor(private formbuilder: FormBuilder,private http : HttpClient,private router : Router) { }

  ngOnInit(): void {
  this.loginform=this.formbuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  }
  login(){
    this.http.get<any>("http://localhost:4200/login")
    .subscribe(res => {
      const user = res.find((a:any)=>{
        return a.username === this.loginform.value.username && a.password === this.loginform.value.password 
      });
      if(user){
        alert("login success")
        this.loginform.reset();
        this.router.navigate(['user-dashboard']);
      }else{
        alert("Invalid Username or Password")
      }
    },err =>{
      alert("404 error")
    })
  }

}
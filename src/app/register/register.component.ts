import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerform!: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    //form controller
    this.registerform = this.FormBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      cpassword: [''],
      age: [''],
      gender: [''],
      MobNo: [''],
      addr: [''],
      city: ['']
    });
  }
  register() {
    console.log(this.registerform.value);
    //post call to store objects
    this.http
      .post<any>('http://localhost:4200/register', this.registerform.value)
      .subscribe(
        (res) => {
          alert('register Successfull');
          this.registerform.reset();
          this.router.navigate(['login']);
        }
      );
  }
}

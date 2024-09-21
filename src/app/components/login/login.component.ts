import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login!:FormGroup;
  message:any

  constructor(private service:UserService,private route:ActivatedRoute,private router:Router,private builder:FormBuilder){
    this.login=this.builder.group({
      email:'',
      password:''
    })
  }

  ngOnInit(): void {
    
  }

  loginUser(){
    console.log(this.login.value)
    const email=this.login.value.email
    const password=this.login.value.password
    this.service.login(email,password).subscribe(response=>{
      this.message=response
      this.router.navigate(['user'] ,{ queryParams: { message: 'Welcome Back' } })
    })
  }

}

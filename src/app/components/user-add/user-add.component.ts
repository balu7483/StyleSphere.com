import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit{
  
  data!:FormGroup;
  getUser:any;
  searchData:any;
  message!:string;

  constructor(private builder:FormBuilder,private service:UserService,private router:Router) {

    this.data=this.builder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      dob:['',Validators.required],
      country:['',Validators.required]
    });
  }
  
  ngOnInit(): void {
  }

  addUser(){
    if(this.data.valid){
      const userData:User = this.data.value;
      this.service.addUser(userData).subscribe(response=>{
        console.log("user updated Successfully",response);
        this.data.reset();
        this.router.navigate(["user"], { queryParams: { message: 'User added successfully' } });
      });
    
    }else{
      console.log("Form is invalid. Please check the input")
    }
  }


  searchUser(){
    const email = this.data.value.email;
    this.service.searchEmail(email).subscribe(response=>{
      this.searchData
      this.addUser();
    })
  }

}

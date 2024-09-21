import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit{

  data!:FormGroup
  userId!:number
  message!:string
  user!:any;
  firstName!:string
  lastName!:string
  dob!:string
  password!:string
  country!:string
  id!:number
  email!:string



  constructor(private service:UserService,private builder:FormBuilder,private route:ActivatedRoute,private router:Router){
    this.data=this.builder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      dob:[''],
      country:['']
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.userId=+params['id'];
      console.log('user ID',this.userId)
    })
    this.getuserbyId()
  }

  updateUser() {
    const userData = this.data.value
    this.service.updateUser(this.userId,userData).subscribe(response=>{
      console.log("user updated Successfully")
      this.data.reset();
      this.router.navigate(["user"],{queryParams:{message:'User Updated Successfully'}})
    })
    
  }

  // updateUser(){
  //   console.log(this.data.value)
  // }

  getuserbyId():void{
    this.service.getUserById(this.userId).subscribe((data)=>{
      this.user=data;
      const firstName=this.user.firstName
      const lastName=this.user.lastName
      const dob=this.user.dob
      const password=this.user.password
      const country= this.user.country
      const email = this.user.email
      this.country=country
      this.firstName=firstName
      this.lastName=lastName
      this.dob=dob
      this.email=email
      this.password=password
    })
  }

}

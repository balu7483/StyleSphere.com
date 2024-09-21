import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { last } from 'rxjs';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  
  user: any; 
  userId!:number
  firstName!:string
  lastName!:string
  dob!:string
  password!:string
  country!:string
  id!:number
  email!:string
  showPassword:boolean=false;



  constructor(private service:UserService,private router:Router,private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.userId=+params['id'];
      console.log('user ID',this.userId)
    })
    this.getUserById();
  }

  maskPassword():string{
    return this.password.replace(/./g,'*')
  }

  getUserById(): void {
    this.service.getUserById(this.userId).subscribe((data)=>{
      this.user=data
      const firstName=this.user.firstName
      const lastName=this.user.lastName
      const dob=this.user.dob
      const password=this.user.password
      const country= this.user.country
      const id = this.user.id
      const email = this.user.email
      this.country=country
      this.id=id
      this.firstName=firstName
      this.lastName=lastName
      this.dob=dob
      this.email=email
      this.password=password
    })
}

togglePasswordVisibility():void{
  this.showPassword=!this.showPassword
}

  

}

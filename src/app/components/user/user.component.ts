import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: any;
  find: FormGroup;
  msg: any;
  searchData: any;
  message!:string
  

  constructor(private service: UserService, private builder: FormBuilder,private route: ActivatedRoute,private router:Router) {
    this.find = this.builder.group({
      searchValue: ['']
    });

    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.refreshData();
        this.message=this.route.snapshot.queryParams['message'] || '';
      }
    });
  }

  

  ngOnInit(): void {
    if(this.refreshData()===null){
      this.message="no users found"
    }
    else{
    this.refreshData();
    }
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(response => {
      console.log("Deleted Successfully");
      this.refreshData();
      this.message="user deleted successfully"
      this.router.navigate(['user'])
    });
  }

  search() {
    const value = this.find.value.searchValue;
  if (value.includes(".com")) {
    this.service.searchEmail(value).subscribe(response => {
      this.searchData = response;
      console.log(this.searchData); 
      this.msg = ''; 
    });
  } else {
    this.msg = "Check the email";
    this.searchData = null; // Reset searchData
  }

  this.find.reset();
  }

  private refreshData() {
    this.service.getUser().subscribe((response) => {
      this.data = response;
    }); 
  }
}
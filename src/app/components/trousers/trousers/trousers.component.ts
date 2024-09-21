import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TrousersService } from 'src/app/services/trousers.service';

@Component({
  selector: 'app-trousers',
  templateUrl: './trousers.component.html',
  styleUrls: ['./trousers.component.css']
})
export class TrousersComponent implements OnInit{
  find!:FormGroup
  data:any
  deleteData:any
  message:any

  constructor(private service:TrousersService,private builder:FormBuilder,private route:ActivatedRoute,private router:Router){

    this.find=this.builder.group({
      searchvalue:['']
    })
  
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.reloadPage();
        this.message=this.route.snapshot.queryParams['message'] || '';
      }
    });
  }
  
  
    ngOnInit(): void {
      this.reloadPage()
    }
  
    getTrousers(){
      return this.service.getTrousers().subscribe((response)=>{
        this.data=response;
      })
  
    }
  
    delete(id:number){
      this.service.deleteTrouser(id).subscribe(data=>{
        this.deleteData=data
        this.reloadPage()
      })
    }
  
    reloadPage(){
      return  this.service.getTrousers().subscribe(response=>{
        this.data=response
      })
    }
  
    search(){
      const data = this.find.value.searchvalue
      console.log(this.find.value.searchvalue)
      if(this.find.value.searchvalue===''){
        console.log("please input Search Field")
      }
    }
  
    searchByName(){
  
    }
  
    searchByBrand(){
  
    }
  
    searchByGender(){
  
    }
  
    searchById(){
  
    }
  
    searchByColor(){
  
    }
  
    searchBySize(){
      
    }
  }
  



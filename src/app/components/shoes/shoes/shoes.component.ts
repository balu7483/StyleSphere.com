import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ShirtService } from 'src/app/services/shirtservice/shirt.service';
import { ShoeService } from 'src/app/services/shoe.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit{

  find!:FormGroup
  data:any
  deleteData:any
  message:any

 
constructor(private service:ShoeService,private builder:FormBuilder,private route:ActivatedRoute,private router:Router){

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

  getshirts(){
    return this.service.getShoes().subscribe((response)=>{
      this.data=response;
    })

  }

  delete(id:number){
    this.service.deleteShoes(id).subscribe(data=>{
      this.deleteData=data
      this.reloadPage()
    })
  }

  reloadPage(){
    this.service.getShoes().subscribe(data=>{
      this.data=data
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

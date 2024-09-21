import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SlideService } from 'src/app/services/slide.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent {

  find!:FormGroup
  data:any
  deleteData:any
  message:any

 
constructor(private service:SlideService,private builder:FormBuilder,private route:ActivatedRoute,private router:Router){


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

  getslides(){
    return this.service.getSlides().subscribe((response)=>{
      this.data=response;
    })

  }

  delete(id:number){
    this.service.deleteSlides(id).subscribe(data=>{
      this.deleteData=data
      this.reloadPage()
    })
  }

  reloadPage(){
    this.service.getSlides().subscribe(data=>{
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

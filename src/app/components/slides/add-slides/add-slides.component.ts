import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SlideService } from 'src/app/services/slide.service';

@Component({
  selector: 'app-add-slides',
  templateUrl: './add-slides.component.html',
  styleUrls: ['./add-slides.component.css']
})
export class AddSlidesComponent {

  slidedata!: FormGroup;
  slidesdata:any
  brands:string[]=['PUMA','NIKE','ADDIDAS','REEBOK']
  genders:string[]=['MEN','WOMEN','GIRL','BOY']
  types:string[]=['Cotton','Wool','Linen','Denim','Polister','Lether']
  slidesType:string[]=['Polo','Sleeveless','Full Sleeves','Round Neck','Casual','V Neck','Checks']

  constructor(private service: SlideService, private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router) {

    this.slidedata = this.formBuilder.group({
      name: '',
      brand: '',
      gender: '',
      slidesType:'',
      price: 0,
      description: '',
      color: this.formBuilder.array([]),
      size: this.formBuilder.array([]),
      imageUrl: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    console.log(this.slidedata.value.imageUrl)
  }

  get colorArray() {
    return this.slidedata.get('color') as FormArray;
  }

  get sizeArray() {
    return this.slidedata.get('size') as FormArray;
  }

  get imageUrlArray() {
    return this.slidedata.get('imageUrl') as FormArray;
  }

  addColor() {
    this.colorArray.push(this.formBuilder.control(''));
  }

  addSize() {
    this.sizeArray.push(this.formBuilder.control(''));
  }

  addImageUrl() {
    this.imageUrlArray.push(this.formBuilder.control(''));
  }

  removeColor(index: number) {
    this.colorArray.removeAt(index);
  }

  removeSize(index: number) {
    this.sizeArray.removeAt(index);
  }

  removeImageUrl(index: number) {
    this.imageUrlArray.removeAt(index);
  }

  addSlides(){
    console.log(this.slidedata.value)
    const slide=this.slidedata.value;
    this.service.addSlides(slide).subscribe(data=>{
      this.slidesdata=data;
      this.router.navigate(['slides'],{queryParams : {message:'Slides Added Successfully'}})
    })
  }
}




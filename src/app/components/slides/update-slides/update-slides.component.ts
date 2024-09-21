import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SlideService } from 'src/app/services/slide.service';

@Component({
  selector: 'app-update-slides',
  templateUrl: './update-slides.component.html',
  styleUrls: ['./update-slides.component.css']
})
export class UpdateSlidesComponent {

  slidesdata!:FormGroup;
  slidedata:any
  userId!:number;
  userIdData:any;
  updateData:any;

  brands:string[]=['PUMA','NIKE','ADDIDAS','REEBOK']
  genders:string[]=['MEN','WOMEN','GIRL','BOY']
  types:string[]=['Cotton','Wool','Linen','Denim','Polister','Lether']
  slidesTypes:string[]=['Polo','Sleeveless','Full Sleeves','Round Neck','Casual','V Neck','Checks']

  constructor(private service: SlideService, private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router) {

    this.slidesdata = this.formBuilder.group({
      name: '',
      brand: '',
      gender: '',
      type: '',
      slidesType:'',
      price: 0,
      description: '',
      color: this.formBuilder.array([]),
      size: this.formBuilder.array([]),
      imageUrl: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.userId=+params['id'];
      console.log('user Id',this.userId)
    })
  }

  get colorArray() {
    return this.slidesdata.get('color') as FormArray;
  }

  get sizeArray() {
    return this.slidesdata.get('size') as FormArray;
  }

  get imageUrlArray() {
    return this.slidesdata.get('imageUrl') as FormArray;
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

  UpdateSlides() {
    const modifiedData: any = {};
    const userData = this.slidesdata.value;
    this.service.updateSlides(userData,this.userId).subscribe(data=>{
      this.updateData=data
      this.slidesdata.reset();
      this.router.navigate(['slides'],{queryParams:{message:'Shoe Updated Successfully'}})
    })
  }
  

}


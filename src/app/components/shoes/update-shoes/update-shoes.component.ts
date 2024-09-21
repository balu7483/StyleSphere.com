import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeService } from 'src/app/services/shoe.service';

@Component({
  selector: 'app-update-shoes',
  templateUrl: './update-shoes.component.html',
  styleUrls: ['./update-shoes.component.css']
})
export class UpdateShoesComponent implements OnInit{


  shoesdata!:FormGroup;
  shoedata:any
  userId!:number;
  userIdData:any;
  updateData:any;

  brands:string[]=['PUMA','NIKE','ADDIDAS','REEBOK']
  genders:string[]=['MEN','WOMEN','GIRL','BOY']
  types:string[]=['Cotton','Wool','Linen','Denim','Polister','Lether']
  shoesTypes:string[]=['Polo','Sleeveless','Full Sleeves','Round Neck','Casual','V Neck','Checks']

  constructor(private service: ShoeService, private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router) {

    this.shoesdata = this.formBuilder.group({
      name: '',
      brand: '',
      gender: '',
      type: '',
      shoesType:'',
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
    return this.shoesdata.get('color') as FormArray;
  }

  get sizeArray() {
    return this.shoesdata.get('size') as FormArray;
  }

  get imageUrlArray() {
    return this.shoesdata.get('imageUrl') as FormArray;
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

  UpdateShoes() {
    const modifiedData: any = {};
    const userData = this.shoesdata.value;
    this.service.updateShoes(userData,this.userId).subscribe(data=>{
      this.updateData=data
      this.shoesdata.reset();
      this.router.navigate(['shoes'],{queryParams:{message:'Slides Updated Successfully'}})
    })
  }
  

}


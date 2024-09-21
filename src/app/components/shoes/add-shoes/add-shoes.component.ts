import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeService } from 'src/app/services/shoe.service';

@Component({
  selector: 'app-add-shoes',
  templateUrl: './add-shoes.component.html',
  styleUrls: ['./add-shoes.component.css']
})
export class AddShoesComponent {

  shoedata!: FormGroup;
  shoesdata:any
  brands:string[]=['PUMA','NIKE','ADDIDAS','REEBOK']
  genders:string[]=['MEN','WOMEN','GIRL','BOY']
  types:string[]=['Cotton','Wool','Linen','Denim','Polister','Lether']
  shoesType:string[]=['Polo','Sleeveless','Full Sleeves','Round Neck','Casual','V Neck','Checks']

  constructor(private service: ShoeService, private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router) {

    this.shoedata = this.formBuilder.group({
      name: '',
      brand: '',
      gender: '',
      shoesType:'',
      price: 0,
      description: '',
      color: this.formBuilder.array([]),
      size: this.formBuilder.array([]),
      imageUrl: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    console.log(this.shoedata.value.imagerl)
  }

  get colorArray() {
    return this.shoedata.get('color') as FormArray;
  }

  get sizeArray() {
    return this.shoedata.get('size') as FormArray;
  }

  get imageUrlArray() {
    return this.shoedata.get('imageUrl') as FormArray;
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

  addShoes(){
    console.log(this.shoedata.value)
    const shoes=this.shoedata.value;
    this.service.addShoes(shoes).subscribe(data=>{
      this.shoesdata=data;
      this.router.navigate(['shoes'],{queryParams : {message:'Shoes Added Successfully'}})
    })
  }
}



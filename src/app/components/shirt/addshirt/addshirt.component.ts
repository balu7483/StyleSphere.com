import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShirtService } from 'src/app/services/shirtservice/shirt.service';

@Component({
  selector: 'app-addshirt',
  templateUrl: './addshirt.component.html',
  styleUrls: ['./addshirt.component.css']
})
export class AddshirtComponent implements OnInit {

  shirtdata!: FormGroup;
  shirtsdata:any
  brands:string[]=['PUMA','NIKE','ADDIDAS','REEBOK']
  genders:string[]=['MEN','WOMEN','GIRL','BOY']
  types:string[]=['Cotton','Wool','Linen','Denim','Polister','Lether']
  shirtTypes:string[]=['Polo','Sleeveless','Full Sleeves','Round Neck','Casual','V Neck','Checks']

  constructor(private service: ShirtService, private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router) {
    this.shirtdata = this.formBuilder.group({
      name: '',
      brand: '',
      gender: '',
      type: '',
      shirtType:'',
      price: 0,
      description: '',
      color: this.formBuilder.array([]),
      size: this.formBuilder.array([]),
      imageUrl: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    console.log(this.shirtdata.value.imageUrl)
  }

  get colorArray() {
    return this.shirtdata.get('color') as FormArray;
  }

  get sizeArray() {
    return this.shirtdata.get('size') as FormArray;
  }

  get imageUrlArray() {
    return this.shirtdata.get('imageUrl') as FormArray;
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

  addShirt(){
    console.log(this.shirtdata.value)
    const shirts=this.shirtdata.value;
    this.service.addShirts(shirts).subscribe(data=>{
      this.shirtsdata=data;
      this.router.navigate(['shirt'],{queryParams : {message:'Shirt Added Successfully'}})
    })
  }
}

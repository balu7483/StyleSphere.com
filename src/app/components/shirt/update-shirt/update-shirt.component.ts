import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShirtService } from 'src/app/services/shirtservice/shirt.service';

@Component({
  selector: 'app-update-shirt',
  templateUrl: './update-shirt.component.html',
  styleUrls: ['./update-shirt.component.css']
})
export class UpdateShirtComponent implements OnInit {

  shirtdata!:FormGroup;
  shirtsdata:any
  userId!:number;
  userIdData:any;
  updateData:any;

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
    this.route.params.subscribe(params=>{
      this.userId=+params['id'];
      console.log('user Id',this.userId)
    })
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

  UpdateShirt() {
    const modifiedData: any = {};
    const userData = this.shirtdata.value;
    this.service.updateShirt(this.userId,userData).subscribe(data=>{
      this.updateData=data
      this.shirtdata.reset();
      this.router.navigate(['shirt'],{queryParams:{message:'Shirt Updated Successfully'}})
    })
  }
  

}


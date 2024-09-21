import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrousersService } from 'src/app/services/trousers.service';

@Component({
  selector: 'app-update-trouses',
  templateUrl: './update-trouses.component.html',
  styleUrls: ['./update-trouses.component.css']
})
export class UpdateTrousesComponent implements OnInit {

  trousersdata!:FormGroup;
  shirtsdata:any
  userId!:number;
  userIdData:any;
  updateData:any;

  brands:string[]=['PUMA','NIKE','ADDIDAS','REEBOK']
  genders:string[]=['MEN','WOMEN','GIRL','BOY']
  types:string[]=['Cotton','Wool','Linen','Denim','Polister','Lether']
  trousersTypes:string[]=['Polo','Sleeveless','Full Sleeves','Round Neck','Casual','V Neck','Checks']

  constructor(private service: TrousersService, private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router) {
    this.trousersdata = this.formBuilder.group({
      name: '',
      brand: '',
      gender: '',
      type: '',
      trousersType:'',
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
    return this.trousersdata.get('color') as FormArray;
  }

  get sizeArray() {
    return this.trousersdata.get('size') as FormArray;
  }

  get imageUrlArray() {
    return this.trousersdata.get('imageUrl') as FormArray;
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

  Updatetrousers() {
    const modifiedData: any = {};
    const userData = this.trousersdata.value;
    this.service.updateTrouser(this.userId,userData).subscribe(data=>{
      this.updateData=data
      this.trousersdata.reset();
      this.router.navigate(['trousers'],{queryParams:{message:'Trousers Updated Successfully'}})
    })
  }
  
}

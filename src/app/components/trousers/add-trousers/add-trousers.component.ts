import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrousersService } from 'src/app/services/trousers.service';

@Component({
  selector: 'app-add-trousers',
  templateUrl: './add-trousers.component.html',
  styleUrls: ['./add-trousers.component.css']
})
export class AddTrousersComponent {

  trousersdata!: FormGroup;
  shirtsdata:any
  brands:string[]=['PUMA','NIKE','ADDIDAS','REEBOK']
  genders:string[]=['MEN','WOMEN','GIRL','BOY']
  types:string[]=['Cotton','Wool','Linen','Denim','Polister','Lether']
  trousersTypes:string[]=['Jeans','Joggers','Baggy','Chinos','BootCut']

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
    console.log(this.trousersdata.value.imageUrl)
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

  addTrousers(){
    console.log(this.trousersdata.value)
    const trousers=this.trousersdata.value;
    this.service.addTrousers(trousers).subscribe(data=>{
      this.shirtsdata=data;
      this.router.navigate(['trousers'],{queryParams : {message:'Trousers Added Successfully'}})
    })
  }
}




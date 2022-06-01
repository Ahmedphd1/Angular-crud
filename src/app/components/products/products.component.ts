import { Component, OnInit } from '@angular/core';
import { iproduct } from 'src/app/interface/interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { productservice } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = "product details";
  list : iproduct[] = [];
  product : iproduct = {} as iproduct;
  productbyid : iproduct[] = [];

  productform = new FormGroup({
    productid: new FormControl(''),
    productname: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private webapi:productservice) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.product = { productid : 0,
      productname : this.productform.controls["productname"].value,
      price : Number(this.productform.controls["price"].value)
  }

  this.postproduct(this.product)
}

postproduct(productobject : iproduct){
    
  this.webapi.post(productobject).subscribe(createdproduct =>{
    alert(createdproduct)
  })
}

deleteproduct(productid:number){
  this.webapi.delete(productid).subscribe();
}

}

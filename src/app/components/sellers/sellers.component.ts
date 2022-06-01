import { Component, OnInit } from '@angular/core';
import { iseller } from 'src/app/interface/interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { sellerservice } from 'src/app/services/seller.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {
  title = "seller details";
  list : iseller[] = [];
  seller : iseller = {} as iseller;
  sellerbyid : iseller[] = [];

  sellerform = new FormGroup({
    sellerid: new FormControl(''),
    name: new FormControl(''),
    productid: new FormControl('')
  });



  constructor(private webapi:sellerservice) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.seller = {
      sellerid : 0,
      name : this.sellerform.controls["name"].value,
      productid : Number(this.sellerform.controls["productid"].value)
      }

    this.createseller(this.seller)
  }

  viewseller() {
    this.webapi.getall().subscribe((allsellers)=>{
      console.log(allsellers)
      this.list = allsellers;
     })
  }

  deleteseller(sellerid:number){
    this.webapi.delete(sellerid).subscribe();
  }

  getsellerbyid(sellerid: string) {
    this.sellerbyid = []
    this.webapi.gettables(Number(sellerid)).subscribe((seller) => {
      this.sellerbyid.push(seller[0])
    });
  }

  createseller(sellerobject : iseller){
    
    this.webapi.post(sellerobject).subscribe(createdseller =>{
      alert(createdseller)
    })
  }

}

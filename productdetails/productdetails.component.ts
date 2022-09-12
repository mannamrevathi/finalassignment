import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  singleproduct:any;
  productname:any;
  product:any[] =[
    { name: 'Samsung', desc: 'The latest samsung phone', price:10000 },
    { name: 'Nokia', desc: 'Updated Nokia series', price: 15000 },
    { name: 'realme', desc: ' latest realme', price: 25999 },
    
     
    ]; 

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.productname=this.activatedRoute.snapshot.paramMap.get('id');
    this.singleproduct=this.product.find(x=> x.id==this.productname)
  }
}
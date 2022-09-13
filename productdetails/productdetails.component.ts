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
    { Name: 'Nokia', desc: 'The latest Nokia phone', price:10000 },
    { Name: 'Samsung', desc: 'Updated Samsung series', price: 15000 },
    { Name: 'realme', desc: ' latest realme', price: 25999 },
    
     
    ]; 

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.productname=this.activatedRoute.snapshot.paramMap.get('name');
    this.singleproduct=this.product.find(x=> x.name==this.productname)
  }
}
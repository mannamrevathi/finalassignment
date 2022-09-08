import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product:any[] =[
    { name: 'Nokia 9', desc: 'The latest Nokia phone in 2020', price: 799 },
    { name: 'iPhone 11 Pro', desc: 'The latest iPhone series', price: 999 },
      { name: 'Samsung S20', desc: 'The latest Samsung Galaxy S series in 2020', price: 1199 },
      { name: 'Asus ROG Phone 2', desc: 'The gaming phone from Asus', price: 599 },
      
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

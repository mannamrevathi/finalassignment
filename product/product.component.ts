import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any[]=[

    {
       name : 'Nokia 5.1 Plus',
      price : 7000,
    },
    {
      name : 'Samsung A10s',
      price : 9999,
    },
    {
      name : 'Redmi Mi note 5 pro',
      price : 10999,
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

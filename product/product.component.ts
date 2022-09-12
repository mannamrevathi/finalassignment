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
      price : 8999,
    },
    {
      name : 'Samsung A10s',
      price : 10999,
    },
    {
      name : 'Redmi Mi note 5 pro',
      price : 12999,
    },
    {
      name : 'Vivo Y2',
      price : 9500
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

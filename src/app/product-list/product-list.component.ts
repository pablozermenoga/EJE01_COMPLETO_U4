import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products;

  constructor(private productService: ProductsService) {
    this.products = productService.products;
    /*this.products = [
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: ''
      }
    ];*/
   }

  ngOnInit() {
  }
  share(){
    alert('el producto se compartió!!');
  }

  onNotify(){
    alert('Notificación de producto');
  }
}

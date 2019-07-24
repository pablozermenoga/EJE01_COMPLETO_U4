import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public products;
  public product;

  constructor(private route: ActivatedRoute,
              private CartService: CartService,
              private prodService: ProductsService) {
                this.products = prodService.products;
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
    this.route.paramMap.subscribe(
      params => {
        this.product = this.products[+params.get('productId')];
      }
    );
  }
  addToCart(product){
    this.CartService.addToCart(product);
    alert('Se añadio al carrito' + JSON.stringify(this.CartService.getItems()));
  }

}

import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent{
  listProducts: Product[] = [
    {id: 1, name: 'Coca Cola', description: 'Bebida con azucar', price: 2, stock: 200},
    {id:2, name: 'Corona', description: 'Bebida con alcohol', price: 4, stock: 150},
  ]
}

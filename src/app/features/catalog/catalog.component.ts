import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/IProduct';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products: Product[] = [];

  constructor() {
    for(let i =0; i<20; i++){
      this.products.push({
        id: i,
        name: `Product ${i}`,
        price: 40,
        description: 'Test description'
      })
    }
  }
}

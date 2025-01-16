import { Component, inject } from '@angular/core';
import { Product } from '../../../core/models/product..model';
import { ApiService } from '../../../core/service/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products?:Product[];
  api = inject(ApiService);
  ngOnInit():void{
    this.api.getProductByCategory("electronics").subscribe((products)=>{
      this.products = products;
    })
  }
}

import { Component } from '@angular/core'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent {
  pageTitle: string = 'Lista produktów';
  products: any[] = [
    {
      name: 1
    },
    {
      name: 2
    }
  ]
}

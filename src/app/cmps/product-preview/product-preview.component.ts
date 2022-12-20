import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss'],
})
export class ProductPreviewComponent implements OnInit {
  constructor() {}

  @Input() product!: Product;

  ngOnInit(): void {}
}

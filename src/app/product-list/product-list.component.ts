import { Component, OnInit } from '@angular/core';
import { products } from '../products';

import { CartService } from '../cart.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
	constructor(private cartService: CartService) {}
	products = [...products];

	listOfProducts: any;

	eachProductArr: Array<any> = [];

	share() {
		window.alert('The product has been shared!');
	}

	onNotify() {
		window.alert('You will be notified when the product goes on sale');
	}

	// this.listOfProducts = res;
	ngOnInit() {
		this.cartService.getProducts().subscribe((res) => {
			const values = Object.values(res)[0].map((el: object) =>
				Object.values(el)
			);
			this.eachProductArr = values;
			console.log('values', values);
			this.listOfProducts = Object.values(res)[0];
			console.log('listOfProduct', this.listOfProducts);
		});
	}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

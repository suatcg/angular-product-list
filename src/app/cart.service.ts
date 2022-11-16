import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';
import { json } from 'stream/consumers';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	private url = 'https://dummyjson.com/products';

	constructor(private http: HttpClient) {}

	items: Product[] = [];

	addToCart(product: Product) {
		this.items.push(product);
	}

	getItems() {
		return this.items;
	}

	clearCart() {
		this.items = [];
		return this.items;
	}

	getShippingPrices() {
		return this.http.get<{ type: string; price: number }[]>(
			'/assets/shipping.json'
		);
	}

	getProducts() {
		return this.http.get(this.url);
	}
}

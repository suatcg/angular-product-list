import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-product-modal',
	templateUrl: './product-modal.component.html',
	styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent implements OnInit {
	@Input() product: Array<any> = [];
	@Input() productId: Number = 0;
	@Input() actualProduct: any;
	@Input() listOfProducts: Array<any> = [];
	isVisible = false;
	modalItem: Array<any> = [];
	modalItemId: Number = 0;
	modalItemName: String = '';

	// modalBtnLeft: object = null;

	showModal(): void {
		this.isVisible = true;
		// let modalBtnLeft = document.querySelector(
		// 	'.ant-modal-footer > button:first-child span'
		// );

		// if (modalBtnLeft) {
		// 	modalBtnLeft.textContent = 'Close';
		// }
		// console.log(this.productId);
		console.log('actual', this.actualProduct);
		// this.modalItem = this.product[Number(this.productId) - 1].slice(0, 2);
		// const [itemId, itemName] = [...this.modalItem];

		// console.log(
		// 	'listProducts',
		// 	Object.values(this.listOfProducts[Number(this.productId) - 1])
		// );
		// this.modalItem = Object.entries(
		// 	this.listOfProducts[Number(this.productId) - 1]
		// );

		this.modalItem = this.product[Number(this.productId) - 1].slice(0, 2);
		const [itemId, itemName] = [...this.modalItem];
		this.modalItemId = itemId;
		this.modalItemName = itemName;
		console.log('Id', this.modalItemId);
		console.log('Name', this.modalItemName);

		console.log('modalItem', this.modalItem);

		// console.log(this.productId === this.actualProduct.productId);
	}

	handleOk(): void {
		console.log('Button ok clicked!');
		this.isVisible = false;
	}

	handleCancel(): void {
		console.log('Button cancel clicked!');
		this.isVisible = false;
	}
	constructor() {}
	ngOnInit(): void {
		// console.log('productId', this.productId);
		// console.log('product', this.product);
		// console.log('actualProduct', this.actualProduct);
		// console.log('WASW', this.listOfProducts);
		// console.log('modalBtnLeft', this.modalBtnLeft);
	}
}

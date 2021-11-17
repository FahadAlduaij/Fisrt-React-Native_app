import { makeAutoObservable } from "mobx";

class CartStore {
	constructor() {
		makeAutoObservable(this);
	}

	items = [];

	checkQuantity = (newQ) => {
		const sum = this.items.map((item) => item.quantity);
		console.log(sum);
	};

	addItemToCart = (newQuantity, newProduct) => {
		const foundItem = this.items.find(
			(item) => item.product._id === newProduct._id
		);

		if (foundItem) {
			foundItem.quantity = newQuantity;
			console.log("Item is exists");
		} else {
			this.items.push({
				product: newProduct,
				quantity: newQuantity,
			});
			console.log("Item is NOT exists");
		}
	};

	removeItemFromCart = (productId) => {
		const updateItems = this.items.filter(
			(item) => item.product._id !== productId
		);
		this.items = updateItems;
	};

	get totalQuantity() {
		let total = 0;
		this.items.forEach((item) => (total = total + item.quantity));
		return total;
	}

	get totalPrice() {
		let total = 0;
		this.items.forEach((item) => {
			let sum = item.product.price * item.quantity;
			total = total + sum;
		});
		return total;
	}
}

const cartStore = new CartStore();

export default cartStore;

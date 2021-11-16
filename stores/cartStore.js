import { makeAutoObservable } from "mobx";

class CartStore {
	constructor() {
		makeAutoObservable(this);
	}

	items = [
		{
			product: {
				_id: "6182a8b31bd7fa38942fdf23",
				name: "Cookie",
				price: 5,
				image:
					"https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
			},
			quantity: 5,
		},
		{
			product: {
				_id: "6182a8b31bd7fa46652fdf88",
				name: "Another cookie",
				price: 15,
				image:
					"https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
			},
			quantity: 3,
		},
	];

	addItemToCart = (newItem, productId) => {
		const item = this.items.find((item) => item.product._id === productId);
		if (item) {
			item.quantity = newItem;
		} else {
			this.items = [
				...this.items,
				{
					product: {
						_id: productId._id,
						name: productId.name,
						price: 10,
						image: productId.image,
					},
					quantity: newItem,
				},
			];
			console.log(this.items);
		}
	};
}

const cartStore = new CartStore();

export default cartStore;

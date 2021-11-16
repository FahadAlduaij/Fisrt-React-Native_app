import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ShopStore {
	constructor() {
		makeAutoObservable(this);
	}

	shops = [];

	fetchShops = async () => {
		try {
			const res = await instance.get("/shops");
			this.shops = res.data;
		} catch (error) {
			console.log(error);
		}
	};
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;

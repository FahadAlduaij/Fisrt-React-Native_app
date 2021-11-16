import React from "react";
import { observer } from "mobx-react";
import { VStack } from "native-base";

// components
import CartItem from "./CartItem";

// stores
import cartStore from "../../stores/cartStore";

const CartList = () => {
	const itemList = cartStore.items.map((item) => (
		<CartItem
			key={item.product._id}
			product={item.product}
			quantity={item.quantity}
		/>
	));

	return <VStack m="3">{itemList}</VStack>;
};

export default observer(CartList);

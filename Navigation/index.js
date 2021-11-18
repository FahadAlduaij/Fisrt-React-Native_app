import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import Home from "../components/Home/Home";
import ShopList from "../components/ShopList/ShopList";
import ShopDetails from "../components/ShopList/ShopDetails";
import CartList from "../components/CartList/CartList";
import CartButton from "../components/buttons/CartButton";

const RootNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<Navigator initialRouteName="Home">
			<Screen
				name="Home"
				component={Home}
				options={{
					title: "",
					headerRight: () => <CartButton />,
				}}
			/>
			<Screen
				name="ShopList"
				component={ShopList}
				options={{
					title: "Stream",
					headerRight: () => <CartButton />,
				}}
			/>
			<Screen
				name="ShopDetails"
				component={ShopDetails}
				options={({ route }) => {
					const { shop } = route.params;
					return {
						title: shop.name,
						headerRight: () => <CartButton />,
					};
				}}
			/>
			<Screen
				name="CartList"
				component={CartList}
				options={{
					title: "Cart",
				}}
			/>
		</Navigator>
	);
};

export default RootNavigator;

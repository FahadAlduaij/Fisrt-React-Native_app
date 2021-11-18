import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import Home from "../components/Home/Home";
import ShopList from "../components/ShopList/ShopList";
import ShopDetails from "../components/ShopList/ShopDetails";
import CartList from "../components/CartList/CartList";
import ButtonList from "../components/buttons/ButtonList";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";

const RootNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<Navigator initialRouteName="Home">
			<Screen
				name="Home"
				component={Home}
				options={{
					title: "",
					headerRight: () => <ButtonList />,
				}}
			/>
			<Screen
				name="ShopList"
				component={ShopList}
				options={{
					title: "Stream",
					headerRight: () => <ButtonList />,
				}}
			/>
			<Screen
				name="ShopDetails"
				component={ShopDetails}
				options={({ route }) => {
					const { shop } = route.params;
					return {
						title: shop.name,
						headerRight: () => <ButtonList />,
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
			<Screen
				name="Signin"
				component={Signin}
				options={{
					title: "Sign in",
					headerRight: () => <ButtonList />,
				}}
			/>

			<Screen
				name="Signup"
				component={Signup}
				options={{
					title: "Sign up",
					headerRight: () => <ButtonList />,
				}}
			/>
		</Navigator>
	);
};

export default RootNavigator;

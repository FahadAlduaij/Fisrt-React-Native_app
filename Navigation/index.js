import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import Home from "../components/Home/Home";
import ShopList from "../components/ShopList/ShopList";
import ShopDetails from "../components/ShopList/ShopDetails";

const RootNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<Navigator initialRouteName="Home">
			<Screen
				name="Home"
				component={Home}
				options={{
					headerStyle: {
						backgroundColor: "#36b554",
					},
					headerShown: false,
				}}
			/>
			<Screen name="ShopList" component={ShopList} />
			<Screen
				name="ShopDetails"
				component={ShopDetails}
				options={({ route }) => {
					const { shop } = route.params;
					return {
						title: shop.name,
					};
				}}
			/>
		</Navigator>
	);
};

export default RootNavigator;

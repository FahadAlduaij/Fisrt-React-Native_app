import React from "react";
import { observer } from "mobx-react";
import { VStack, Button, HStack, Heading, Flex } from "native-base";
import { Text, Alert } from "react-native";

// components
import CartItem from "./CartItem";

// stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartList = ({ navigation }) => {
	const itemList = cartStore.items.map((item) => (
		<CartItem
			key={item.product._id}
			product={item.product}
			quantity={item.quantity}
		/>
	));

	const handleCheckOut = () => {
		cartStore.items = [];
		alert("Thank you");
	};

	const handlePress = () => {
		if (authStore.user) {
			handleCheckOut();
		} else {
			Alert.alert("Sign in", "You need to be signed in for checkout.", [
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel",
				},
				{ text: "OK", onPress: () => navigation.navigate("Signin") },
			]);
		}
	};

	return (
		<VStack mx="3">
			{itemList}
			<Flex direction="column" alignItems="flex-end" justifyContent="center">
				<Heading mt="3" size="sm">
					Total
				</Heading>
				<Heading mt="1" size="xs">
					{cartStore.totalPrice} KD
				</Heading>
				<Button
					mt="3"
					size="xs"
					variant="solid"
					colorScheme="success"
					onPress={handlePress}
				>
					Checkout
				</Button>
			</Flex>
		</VStack>
	);
};

export default observer(CartList);

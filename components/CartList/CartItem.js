import React, { useState } from "react";
import { observer } from "mobx-react";
import {
	Box,
	Text,
	Center,
	Divider,
	Avatar,
	HStack,
	VStack,
	Button,
	Flex,
} from "native-base";
import { StyleSheet } from "react-native";
import NumericInput from "react-native-numeric-input";
import { FontAwesome } from "@expo/vector-icons";

// stores
import cartStore from "../../stores/cartStore";
import { baseURL, instance } from "../../stores/instance";

const CartItem = ({ product, quantity }) => {
	const [addItem, setAddItem] = useState(quantity);
	const totalPrice = product.price * quantity;

	const handleAdd = (value) => {
		setAddItem(value);
		cartStore.addItemToCart(value, product);
	};

	const handleDelete = () => {
		cartStore.removeItemFromCart(product._id);
	};

	return (
		<Box>
			<Flex
				mt="2"
				direction="row"
				alignItems="center"
				justifyContent="space-between"
			>
				<HStack>
					<Avatar source={{ uri: baseURL + product.image }} alt="image" />

					<VStack ml="5">
						<Text fontSize="sm">{product.name}</Text>

						<Text fontSize="sm">{product.price} KD</Text>
					</VStack>
				</HStack>

				<HStack>
					<NumericInput
						value={addItem}
						minValue={1}
						maxValue={product.quantity}
						iconSize={2}
						totalWidth={100}
						totalHeight={30}
						rounded
						onChange={(value) => handleAdd(value)}
					/>
					<FontAwesome
						style={styles.removeButton}
						name="trash-o"
						size={24}
						color="black"
						onPress={handleDelete}
					/>
					{/* <Button
						ml="5"
						size="xs"
						variant="solid"
						colorScheme="danger"
						onPress={handleDelete}
					>
						Remove
					</Button> */}
				</HStack>
			</Flex>
			<Divider mt="2" />
		</Box>
	);
};

export default observer(CartItem);

const styles = StyleSheet.create({
	removeButton: {
		color: "#e11d48",
		marginLeft: 40,
		marginRight: 10,
	},
});

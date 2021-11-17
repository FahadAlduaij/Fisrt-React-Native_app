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
import NumericInput from "react-native-numeric-input";

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
					<Button
						ml="5"
						size="xs"
						variant="solid"
						colorScheme="danger"
						onPress={handleDelete}
					>
						Remove
					</Button>
				</HStack>
			</Flex>
			<Divider mt="2" />
		</Box>
	);
};

export default observer(CartItem);

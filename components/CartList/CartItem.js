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
} from "native-base";
import NumericInput from "react-native-numeric-input";

// stores
import cartStore from "../../stores/cartStore";

const CartItem = ({ product, quantity }) => {
	const [addItem, setAddItem] = useState(quantity);
	const totalPrice = +product.price * +quantity;

	const handleAdd = () => {
		cartStore.addItemToCart(addItem, product._id);
	};

	return (
		<Box>
			<HStack w="100%">
				<HStack w="45%">
					<Avatar
						source={{ uri: product.image }}
						style={{ width: 100, height: 100, borderRadius: 5 }}
						alt="image"
					/>

					<Text m="2" fontSize="sm">
						{product.name}
					</Text>

					{/* <Text m="2" fontSize="sm">
						{product.price} KD
						</Text>
						
						<Text m="2" fontSize="sm">
						{quantity} Pieces
					</Text> */}
				</HStack>
				<HStack w="30%">
					<VStack>
						<NumericInput
							value={addItem}
							minValue={0}
							iconSize={2}
							totalWidth={100}
							totalHeight={30}
							rounded
							onChange={(value) => setAddItem(value)}
						/>
						<Button
							variant="solid"
							colorScheme="danger"
							size="xs"
							onPress={handleAdd}
						>
							Add
						</Button>
					</VStack>
				</HStack>
				<HStack w="30%">
					<Text m="2" fontSize="sm">
						<Text>{totalPrice}</Text>
						<Text> KD Total</Text>
					</Text>
				</HStack>
			</HStack>
			<Divider />
		</Box>
	);
};

export default observer(CartItem);

import React from "react";
import { observer } from "mobx-react";
import { Box, Text, Center, Divider } from "native-base";
import { Image } from "react-native";


const CartItem = ({ product, quantity }) => {
	const totalPrice = +product.price * +quantity;
	return (
		<Box>
			<Center>
				<Text mb="2" fontSize="md">
					{product.name}
				</Text>
				<Image
					source={{ uri: product.image }}
					style={{ width: 100, height: 100, borderRadius: 5 }}
					alt="image"
				/>
				<Text mb="2" fontSize="md">
					{product.price}
				</Text>
				<Text mb="2" fontSize="md">
					{quantity}
				</Text>

				<Text mb="2" fontSize="md">
					Total
				</Text>
				<Text mb="2" fontSize="md">
					{totalPrice}
				</Text>
			</Center>
			<Divider />
		</Box>
	);
};

export default observer(CartItem);

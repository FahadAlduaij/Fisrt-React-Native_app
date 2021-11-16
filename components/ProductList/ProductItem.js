import React, { useState } from "react";
import { Image } from "react-native";
import { HStack, Box, Text, Center, Button } from "native-base";

// stores
import { baseURL } from "../../stores/instance";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const ProductItem = ({ product }) => {
	const [addItem, setAddItem] = useState(1);
	const handleAdd = () => {
		cartStore.addItemToCart(addItem, product);
	};
	return (
		<Box>
			<Center>
				<Text mb="2" fontSize="md">
					{product.name}
				</Text>
			</Center>
			<Image
				source={{ uri: baseURL + product.image }}
				style={{ width: 150, height: 220, borderRadius: 5 }}
				alt="image"
			/>
			<Button
				variant="solid"
				colorScheme="danger"
				size="xs"
				onPress={handleAdd}
			>
				Add
			</Button>
		</Box>
	);
};

export default observer(ProductItem);

import React from "react";
import { Image } from "react-native";
import { HStack, Box, Text, Center } from "native-base";

// stores
import { baseURL } from "../../stores/instance";

const ProductItem = ({ product }) => {
	return (
		<Box>
			<Center>
				<Text mb="2" fontSize="md">{product.name}</Text>
			</Center>
			<Image
				source={{ uri: baseURL + product.image }}
				style={{ width: 150, height: 220, borderRadius: 5 }}
				alt="image"
			/>
		</Box>
	);
};

export default ProductItem;

import React, { useState } from "react";
import { Image } from "react-native";
import { HStack, Box, Text, Center, Button, ScrollView } from "native-base";
import NumericInput from "react-native-numeric-input";

// stores
import { baseURL } from "../../stores/instance";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const ProductItem = ({ product, shop }) => {
	const [addItem, setAddItem] = useState(1);

	const handleAdd = () => {
		cartStore.addItemToCart(addItem, product);
	};

	return (
		<Box>
			<ScrollView>
				<Text mb="2" fontSize="lg" alignSelf="center"></Text>
				<Text mb="2" fontSize="lg" alignSelf="center">
					{product.name}
				</Text>

				<Image
					source={{ uri: baseURL + product.image }}
					style={{ width: 150, height: 220, borderRadius: 5 }}
					alt="image"
				/>
				<Center mt="2">
					<NumericInput
						value={addItem}
						minValue={1}
						maxValue={product.quantity}
						iconSize={2}
						totalWidth={100}
						totalHeight={30}
						rounded
						onChange={(value) => setAddItem(value)}
					/>
				</Center>
				<Button
					variant="solid"
					colorScheme="success"
					size="sm"
					mt="2"
					alignSelf="center"
					onPress={handleAdd}
				>
					Add To Cart
				</Button>
			</ScrollView>
		</Box>
	);
};

export default observer(ProductItem);

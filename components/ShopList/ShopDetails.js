import React from "react";
import { observer } from "mobx-react";
import { StyleSheet } from "react-native";
import { Center, Container, HStack, ScrollView } from "native-base";

// components
import ProductList from "../ProductList/ProductList";

const ShopDetails = ({ navigation, route }) => {
	const { shop } = route.params;
	const productList = shop.products.map((product) => (
		<ProductList key={product._id} product={product} shop={shop} />
	));

	return (
		<ScrollView>
			<Center h="100%" w="100%">
				<HStack
					p="2"
					borderRadius="20"
					justifyContent="center"
					alignItems="center"
					flexWrap="wrap"
				>
					{productList}
					{/* <Text>{shop.name}</Text>
			<Image
			source={{ uri: baseURL + shop.image }}
			style={{ width: 100, height: 100 }}
			alt="image"
		/> */}
					{/* <Text mt="3">Movies</Text> */}
				</HStack>
			</Center>
		</ScrollView>
	);
};

export default observer(ShopDetails);

const styles = StyleSheet.create({});

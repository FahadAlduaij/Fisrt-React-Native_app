import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, View, Image } from "react-native";
import { Center, Container, Text, Box, HStack } from "native-base";

// components
import ProductList from "../ProductList/ProductList";

// stores
import { baseURL } from "../../stores/instance";

const ShopDetails = ({ navigation, route }) => {
	const { shop } = route.params;
	const productList = shop.products.map((product) => (
		<ProductList key={product._id} product={product} />
	));

	return (
		<Center>
			<Container mt="3">
				<HStack p="2" borderRadius="20" justifyContent="center" alignItems="center">
					{/* <Text>{shop.name}</Text>
			<Image
			source={{ uri: baseURL + shop.image }}
			style={{ width: 100, height: 100 }}
			alt="image"
		/> */}
					{/* <Text mt="3">Movies</Text> */}
					{productList}
				</HStack>
			</Container>
		</Center>
	);
};

export default observer(ShopDetails);

const styles = StyleSheet.create({});

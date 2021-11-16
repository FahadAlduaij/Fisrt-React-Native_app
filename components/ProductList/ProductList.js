import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
	Box,
	Flex,
	ScrollView,
	VStack,
	HStack,
	Center,
	Heading,
	Stack,
} from "native-base";

// components
import ProductItem from "./ProductItem";

const ProductList = ({ product }) => {
	return (
		<Box direction="row" m="2">
			<ProductItem key={product._id} product={product} />
		</Box>
	);
};

export default observer(ProductList);

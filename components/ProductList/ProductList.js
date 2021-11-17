import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Box } from "native-base";

// components
import ProductItem from "./ProductItem";
import cartStore from "../../stores/cartStore";

const ProductList = ({ product, shop }) => {
	return (
		<Box direction="row" m="2">
			<ProductItem key={product._id} product={product} shop={shop} />
		</Box>
	);
};

export default observer(ProductList);

import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, View } from "react-native";
import { Box, Container, Center, ScrollView, Divider } from "native-base";

// components
import ShopItem from "./ShopItem";

// stores
import shopStore from "../../stores/shopStore";

const ShopList = ({ navigation }) => {
	const shopsList = shopStore.shops.map((shop) => (
		<ShopItem key={shop._id} shop={shop} navigation={navigation} />
	));

	return (
		<ScrollView>
			<Center >
				<Container centerContent="true">
					<Box>{shopsList}</Box>
				</Container>
			</Center>
		
		</ScrollView>
	);
};

export default observer(ShopList);

const styles = StyleSheet.create({});

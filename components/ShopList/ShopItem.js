import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, Image } from "react-native";
import { HStack, VStack, Pressable, Box ,Divider } from "native-base";

// stores
import { baseURL } from "../../stores/instance";
import ShopDetails from "./ShopDetails";

const ShopItem = ({ shop, navigation }) => {
	return (
		<Pressable
			onPress={() => navigation.navigate("ShopDetails", { shop: shop })}
		>
			<VStack w="100%" alignItems="center" space="3">
				<Box mb="3" mt="3">
					<Image
						source={{ uri: baseURL + shop.image }}
						style={{ width: 370, height: 200, borderRadius: 20 }}
						alt="image"
					/>
				</Box>
			</VStack>
			<Divider />
		</Pressable>
	);
};

export default observer(ShopItem);

const styles = StyleSheet.create({});

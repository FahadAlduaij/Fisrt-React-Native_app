import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Flex } from "native-base";

const CartButton = () => {
	const navigation = useNavigation();
	

	return (
		<View style={styles.container}>
			<AntDesign
				onPress={() => {
					navigation.navigate("CartList");
				}}
				style={styles.cartIcon}
				name="shoppingcart"
				size={28}
			/>

			<AntDesign
				onPress={() => {
					navigation.navigate("Home");
				}}
				name="home"
				size={28}
				style={styles.cartIcon}
			/>
		</View>
	);
};

export default CartButton;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	cartIcon: {
		marginRight: 15,
		color: "#171717",
	},
});

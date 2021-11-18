import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Badge, VStack } from "native-base";
import { observer } from "mobx-react";

// stores
import cartStore from "../../stores/cartStore";

const HomeButton = () => {
	const navigation = useNavigation();
	return (
		<Box>
			<AntDesign
				style={styles.cartIcon}
				name="home"
				size={30}
				style={styles.cartIcon}
				onPress={() => {
					navigation.push("Home");
				}}
			/>
		</Box>
	);
};

export default HomeButton;

const styles = StyleSheet.create({
	cartIcon: {
		marginRight: 15,
		color: "#171717",
	},
});

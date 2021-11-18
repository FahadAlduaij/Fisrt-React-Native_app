import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Badge, VStack } from "native-base";
import { observer } from "mobx-react";

// components
import CartButton from "./CartButton";
import HomeButton from "./HomeButton";
import ProfileButton from "./ProfileButton";

const ButtonList = () => {
	return (
		<Box style={styles.container}>
			<CartButton />
			<HomeButton />
			<ProfileButton />
		</Box>
	);
};

export default observer(ButtonList);

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

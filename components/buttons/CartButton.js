import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Badge, VStack } from "native-base";
import { observer } from "mobx-react";

// stores
import cartStore from "../../stores/cartStore";

const CartButton = () => {
	const navigation = useNavigation();
	// const [itemsQuantity, setItemsQuantity] = useState(cartStore.totalQuantity);

	return (
		<Box>
			<VStack>
				<Badge
					colorScheme="danger"
					rounded="999px"
					mb={-3}
					mr={1}
					zIndex={1}
					variant="solid"
					alignSelf="flex-end"
					_text={{
						fontSize: 9,
					}}
				>
					{cartStore.totalQuantity}
				</Badge>
				<AntDesign
					name="shoppingcart"
					size={30}
					style={styles.cartIcon}
					onPress={() => {
						navigation.navigate("CartList");
					}}
				/>
			</VStack>
		</Box>
	);
};

export default observer(CartButton);

const styles = StyleSheet.create({
	cartIcon: {
		marginRight: 15,
		color: "#171717",
	},
});

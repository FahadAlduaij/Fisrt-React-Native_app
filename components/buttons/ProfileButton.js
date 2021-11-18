import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Badge, VStack, Avatar, Pressable } from "native-base";
import { observer } from "mobx-react";

// stores
import authStore from "../../stores/authStore";

const ProfileButton = () => {
	const navigation = useNavigation();
	return (
		<Pressable>
			{({ isHovered, isFocused, isPressed }) => {
				return (
					<Box
						bg={isPressed ? "cyan.900" : isHovered ? "cyan.800" : "cyan.700"}
						rounded="50"
						mr="2"
						style={{
							transform: [
								{
									scale: isPressed ? 0.96 : 1,
								},
							],
						}}
					>
						<Avatar
							bg="lightBlue.400"
							size="9"
							source={{ uri: authStore.user.image }}
						>
							NB
							<Avatar.Badge bg="green.500" />
						</Avatar>
					</Box>
				);
			}}
		</Pressable>
	);
};

export default ProfileButton;

const styles = StyleSheet.create({
	cartIcon: {
		marginRight: 10,
		color: "#171717",
	},
});

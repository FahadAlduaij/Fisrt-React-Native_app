import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";

// Navigation
import { NavigationContainer } from "@react-navigation/native";

// Components
import RootNavigator from "./Navigation";

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</NativeBaseProvider>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";

// Components
import Home from "./components/Home";

export default function App() {
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<Home />
				<StatusBar style="auto" />
			</View>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

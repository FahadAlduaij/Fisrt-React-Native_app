import React from "react";
import {
	Container,
	Text,
	Heading,
	Center,
	Button,
} from "native-base";

export default function Home() {
	return (
		<Center flex={1} px="3">
			<Container>
				<Heading>
					First React-Native App
					<Heading color="emerald.500"> By Fahad AlDuaij </Heading>
				</Heading>
				<Text mt="3" fontWeight="medium">
					NativeBase is a simple, modular and accessible component library that
					gives you building blocks to build you React applications.
				</Text>
				<Button
					size="lg"
					variant="outline"
					colorScheme="primary"
					onPress={() => alert("Clicked")}
				>
					Click Me
				</Button>
			</Container>
		</Center>
	);
}

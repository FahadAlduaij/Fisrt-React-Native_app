import React from "react";
import { Container, Text, Heading, Center, Button } from "native-base";

export default function Home({ navigation }) {
	return (
		<Center flex={1} px="3">
			<Container>
				<Heading>
					First React-Native App
					<Heading color="danger.600"> Moviez</Heading>
				</Heading>
				<Text mt="3" fontWeight="medium">
					NativeBase is a simple, modular and accessible component library that
					gives you building blocks to build you React applications.
				</Text>
				<Button
					px="5"
					mt="3"
					size="lg"
					variant="outline"
					colorScheme="danger"
					onPress={() => navigation.navigate("ShopList")}
				>
					Click Me
				</Button>
			</Container>
		</Center>
	);
}

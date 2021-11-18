import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
	Box,
	Text,
	Heading,
	VStack,
	FormControl,
	Input,
	Link,
	Button,
	HStack,
	Center,
	useToast,
} from "native-base";

// stores
import authStore from "../../stores/authStore";

export const Signin = ({ navigation }) => {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const toast = useToast();

	const handleSubmit = () => {
		authStore.signIn(user, navigation, toast);
	};

	return (
		<Center>
			<Box safeArea p="2" py="8" w="90%" maxW="290">
				<Heading
					size="lg"
					fontWeight="600"
					color="coolGray.800"
					_dark={{
						color: "warmGray.50",
					}}
				>
					Sign in
				</Heading>
				<Heading
					mt="1"
					_dark={{
						color: "warmGray.200",
					}}
					color="coolGray.600"
					fontWeight="medium"
					size="xs"
				>
					Sign in to checkout!
				</Heading>

				<VStack space={3} mt="5">
					<FormControl>
						<FormControl.Label>Username</FormControl.Label>
						<Input
							onChangeText={(username) => setUser({ ...user, username })}
							placeholder="Enter username"
						/>
					</FormControl>

					<FormControl>
						<FormControl.Label>Password</FormControl.Label>
						<Input
							type="password"
							onChangeText={(password) => setUser({ ...user, password })}
							placeholder="Enter password"
						/>
						<Link
							_text={{
								fontSize: "xs",
								fontWeight: "500",
								color: "indigo.500",
							}}
							alignSelf="flex-end"
							mt="1"
						>
							Forget Password?
						</Link>
					</FormControl>

					<Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
						Sign in
					</Button>

					<HStack mt="6" justifyContent="center">
						<Text
							fontSize="sm"
							color="coolGray.600"
							_dark={{
								color: "warmGray.200",
							}}
						>
							I'm a new user{" "}
						</Text>
						<Link
							_text={{
								color: "indigo.500",
								fontWeight: "medium",
								fontSize: "sm",
							}}
							onPress={() => navigation.replace("Signup")}
						>
							Create New Account
						</Link>
					</HStack>
				</VStack>
			</Box>
		</Center>
	);
};

export default Signin;

const styles = StyleSheet.create({});

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
	NativeBaseProvider,
	ScrollView,
	useToast,
} from "native-base";

// stores
import authStore from "../../stores/authStore";

export const Signup = ({ navigation }) => {
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		username: "",
		password: "",
		image: "",
	});
	const toast = useToast();

	const handleSubmit = () => {
		authStore.signUp(user, navigation, toast);
	};

	return (
		<ScrollView>
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
						Sign up
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
						Create New Account!
					</Heading>

					<VStack space={3} mt="5">
						<FormControl>
							<FormControl.Label>First name</FormControl.Label>
							<Input
								onChangeText={(firstName) => setUser({ ...user, firstName })}
								placeholder="Enter your first name"
							/>
						</FormControl>

						<FormControl>
							<FormControl.Label>Last Name</FormControl.Label>
							<Input
								onChangeText={(lastName) => setUser({ ...user, lastName })}
								placeholder="Enter your last name"
							/>
						</FormControl>

						<FormControl>
							<FormControl.Label>Email</FormControl.Label>
							<Input
								onChangeText={(email) => setUser({ ...user, email })}
								placeholder="Enter your email"
							/>
						</FormControl>

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
						</FormControl>

						<FormControl>
							<FormControl.Label>Image</FormControl.Label>
							<Input
								onChangeText={(image) => setUser({ ...user, image })}
								placeholder="Enter image"
							/>
						</FormControl>

						<Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
							Sign up
						</Button>

						<HStack mt="6" justifyContent="center">
							<Text
								fontSize="sm"
								color="coolGray.600"
								_dark={{
									color: "warmGray.200",
								}}
							>
								I already have an account
							</Text>
							<Link
								_text={{
									color: "indigo.500",
									fontWeight: "medium",
									fontSize: "sm",
								}}
								onPress={() => navigation.replace("Signin")}
							>
								{" "}
								Sign in
							</Link>
						</HStack>
					</VStack>
				</Box>
			</Center>
		</ScrollView>
	);
};

export default Signup;

const styles = StyleSheet.create({});

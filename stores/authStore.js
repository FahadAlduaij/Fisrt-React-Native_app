import decode from "jwt-decode";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

// stores
import { instance } from "./instance";

class AuthStore {
	constructor() {
		// makeObservable(this, {
		// 	user: observable,
		// 	isUserAdmin: observable,
		// 	setUser: action,
		// 	signIn: action,
		// 	signUp: action,
		// 	signOut: action,
		// 	checkRole: action,
		// });
		makeAutoObservable(this);
	}

	// To check if the user is admin.
	isUserAdmin = false;
	user = null;

	setUser = async (token) => {
		await AsyncStorage.setItem("myToken", token);
		instance.defaults.headers.common.Authorization = `Bearer ${token}`;
		this.user = decode(token);
	};

	checkForToken = async () => {
		const token = await AsyncStorage.getItem("myToken");
		if (token) {
			const tempUser = decode(token);
			const time = tempUser.exp * 1000;
			if (time > Date.now()) {
				return this.setUser(token);
			} else {
				return this.signOut();
			}
		}
	};

	// checkRole = () => {
	// 	const token = localStorage.getItem("myToken");
	// 	if (token) {
	// 		const tempUser = decode(token);
	// 		if (tempUser.admin) {
	// 			this.isUserAdmin = true;
	// 		} else {
	// 			this.isUserAdmin = false;
	// 		}
	// 	}
	// };

	signIn = async (userInfo, navigation, toast) => {
		try {
			const res = await instance.post("/signin", userInfo);
			this.setUser(res.data.token);
			toast.show({
				title: `Welcome ${this.user.username}`,
				description: `You Signed in Successfully `,
				placement: "top",
				status: "success",
				duration: 3000,
			});
			navigation.goBack();
		} catch (error) {
			console.log(error);
			toast.show({
				title: `Try Again!`,
				description: `Entered wrong Username/Password`,
				placement: "top",
				status: "error",
				duration: 4000,
			});
		}
	};

	signUp = async (userInfo, navigation, toast) => {
		try {
			const res = await instance.post("/signup", userInfo);
			this.setUser(res.data.token);
			toast.show({
				title: `Welcome ${this.user.username}`,
				description: `You Created a New Account Successfully`,
				placement: "top",
				status: "success",
				duration: 3000,
			});
			navigation.navigation("CartList");
		} catch (error) {
			console.log(error);
			toast.show({
				title: `Try Again!`,
				description: `Username are taken or something else wrong`,
				placement: "top",
				status: "error",
				duration: 4000,
			});
		}
	};

	signOut = async () => {
		delete instance.defaults.headers.common.Authorization;
		await AsyncStorage.removeItem("myToken");
		this.user = null;
		this.isUserAdmin = false;
	};
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;

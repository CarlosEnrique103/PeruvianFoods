import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
	const [fontsLoaded] = useFonts({
		Dancing: require("./assets/fonts/Dancing.ttf"),
		"Merriweather-Italic": require("./assets/fonts/Merriweather-Italic.ttf"),
		"Merriweather-Regular": require("./assets/fonts/Merriweather-Regular.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	useEffect(() => {
		const prepare = async () => await SplashScreen.preventAutoHideAsync();
		prepare();
	}, []);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.root} onLayout={onLayoutRootView}>
			<Text style={styles.hello}>Hello</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	hello: {
		fontFamily: "Merriweather-Italic",
		fontSize: 40,
	},
});

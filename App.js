import { useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import MealNavigator from "./navigation/MealNavigator";
import { StatusBar } from "expo-status-bar";
import Colors from "./constants/Colors";

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
		<View onLayout={onLayoutRootView} style={styles.root}>
			<MealNavigator />
			<StatusBar style='dark' />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
});

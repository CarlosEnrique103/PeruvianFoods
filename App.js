import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import MealNavigator from "./navigation/MealNavigator";
import UseFonts from "./hooks/useFonts";

export default function App() {
	const { fontsLoaded, onLayoutRootView } = UseFonts();

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

import { StyleSheet, Text, View } from "react-native";

const FavoritesScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>FavoritesScreen</Text>
		</View>
	);
};

export default FavoritesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

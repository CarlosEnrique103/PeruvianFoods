import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FavoritesScreen = () => {
	return (
		<View styles={styles.screen}>
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

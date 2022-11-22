import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetailScreen = () => {
	return (
		<View styles={styles.screen}>
			<Text>MealDetailScreen</Text>
		</View>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

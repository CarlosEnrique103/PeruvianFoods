import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryMealScreen = () => {
	return (
		<View styles={styles.screen}>
			<Text>CategoryMealScreen</Text>
		</View>
	);
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

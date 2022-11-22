import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoriesScreen = () => {
	return (
		<View styles={styles.screen}>
			<Text>CategoriesScreen</Text>
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

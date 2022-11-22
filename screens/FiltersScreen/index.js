import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FiltersScreen = () => {
	return (
		<View styles={styles.screen}>
			<Text>FiltersScreen</Text>
		</View>
	);
};

export default FiltersScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

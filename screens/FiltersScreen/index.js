import { StyleSheet, Text, View } from "react-native";

const FiltersScreen = () => {
	return (
		<View style={styles.screen}>
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

import { Button, StyleSheet, Text, View } from "react-native";

const MealDetailScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Button title='Go Home' onPress={() => navigation.popToTop()} />
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

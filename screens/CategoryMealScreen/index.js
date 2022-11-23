import { Button, StyleSheet, Text, View } from "react-native";

const CategoryMealScreen = ({ route, navigation }) => {
	const { category } = route.params;

	return (
		<View style={styles.screen}>
			<Button
				title='Go MealDetaiScren'
				onPress={() => navigation.navigate("MealDetailScreen")}
			/>
			<Button title='Go Back' onPress={() => navigation.goBack()} />
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

import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const CategoriesScreen = ({ navigation, route }) => {
	return (
		<View style={styles.screen}>
			<Button
				title='Go Category Screen'
				onPress={() =>
					navigation.navigate("CategoryMealScreen", {
						name: "Italian",
					})
				}
			/>
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.secondaryColor,
	},
});

import { FlatList, Text, View } from "react-native";
import MealItem from "../../components/MealItem";
import { MEALS } from "../../data/dummy-data";
import styles from "./styles";

const CategoryMealScreen = ({ route, navigation }) => {
	const { id } = route.params;
	const selectedMeals = MEALS.filter((meal) => meal.categoryIds.includes(id));
	const renderMealItem = ({ item }) => {
		return <MealItem {...item} navigation={navigation} />;
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={selectedMeals}
				renderItem={renderMealItem}
				keyExtractor={(item) => item.id}
				style={styles.categoryList}
			/>
		</View>
	);
};

export default CategoryMealScreen;

import { View, FlatList } from "react-native";
import styles from "./styles";
import { MEALS } from "../../data/dummy-data";
import MealItem from "../../components/MealItem";

const FavoritesScreen = ({ route, navigation }) => {
	// const { id } = route.params;
	const id = "m1";
	const selectedMeals = MEALS;
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

export default FavoritesScreen;

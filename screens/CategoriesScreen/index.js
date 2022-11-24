import { FlatList, View } from "react-native";
import CardCategory from "../../components/CardCategory";
import { CATEGORIES } from "../../data/dummy-data";
import styles from "./styles";

const CategoriesScreen = ({ navigation, route }) => {
	const navigateHandler = ({ id, name }) =>
		navigation.navigate("CategoryMealScreen", { id, name });

	const renderCategoryItem = ({ item }) => (
		<CardCategory
			color={item.color}
			onNavigateMealCategory={navigateHandler.bind(this, item)}
		>
			{item.name}
		</CardCategory>
	);

	return (
		<View style={styles.screen}>
			<FlatList
				numColumns={2}
				keyExtractor={(item) => item.id}
				data={CATEGORIES}
				renderItem={renderCategoryItem}
				style={styles.listCategories}
			/>
		</View>
	);
};

export default CategoriesScreen;

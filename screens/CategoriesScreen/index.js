import { FlatList, View } from "react-native";
import CardCategory from "../../components/UI/CardCategory";

import { CATEGORIES } from "../../data/dummy-data";
import styles from "./styles";

const CategoriesScreen = ({ navigation, route }) => {
	const navigateHandler = (name) =>
		navigation.navigate("CategoryMealScreen", { name });

	const renderItem = ({ item }) => (
		<CardCategory
			color={item.color}
			onNavigateMealCategory={navigateHandler.bind(this, item.name)}
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
				renderItem={renderItem}
				style={styles.listCategories}
			/>
		</View>
	);
};

export default CategoriesScreen;

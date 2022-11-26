import { useState, useEffect } from "react";
import { FlatList, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import CardCategory from "../../components/CardCategory";
import { CATEGORIES } from "../../data/dummy-data";
import Colors from "../../constants/Colors";
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

	const openMenuHandler = () => navigation.toggleDrawer();

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Pressable onPress={openMenuHandler}>
					<Entypo name='menu' size={25} color={Colors.primaryColor} />
				</Pressable>
			),
		});
	}, []);

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

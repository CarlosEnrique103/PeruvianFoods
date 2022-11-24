import { useEffect, useState } from "react";
import { Button, Text, Pressable, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Colors from "./../../constants/Colors";
import styles from "./styles";

const MealDetailScreen = ({ navigation, route }) => {
	const { id } = route.params;
	const [toggleFav, setToggleFav] = useState(false);

	const addFavoriteHandler = () => {
		setToggleFav(!toggleFav);
	};

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Pressable onPress={addFavoriteHandler}>
					<AntDesign
						name={toggleFav ? "star" : "staro"}
						size={25}
						color={
							toggleFav
								? Colors.favoriteColorEnabled
								: Colors.favoriteColorDisabled
						}
						style={styles.headerFavoriteIcon}
					/>
				</Pressable>
			),
		});
	}, [toggleFav]);

	return (
		<View style={styles.screen}>
			<Button title='Go Home' onPress={() => navigation.popToTop()} />
			<Text numberOfLines={1}>{id}</Text>
		</View>
	);
};

export default MealDetailScreen;

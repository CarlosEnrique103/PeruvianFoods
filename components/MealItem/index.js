import { Pressable, Text, ImageBackground, View } from "react-native";
import styles from "./styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const MealItem = ({
	id,
	title,
	imageURL,
	affordability,
	complexity,
	duration,
	navigation,
}) => {
	const goMealDetailScreenHandler = () =>
		navigation.navigate("MealDetailScreen", { id, name: title });

	return (
		<Pressable onPress={goMealDetailScreenHandler}>
			<View style={styles.mealItem}>
				<ImageBackground
					source={{ uri: imageURL }}
					style={styles.imageBackground}
				>
					<View style={styles.content}>
						<View style={styles.contentHeader}>
							<FontAwesome
								name='money'
								size={16}
								color={Colors.whiteColor}
								style={styles.icon}
							/>
							<Text style={styles.text}>{affordability}</Text>
						</View>
						<View style={styles.contentBody}>
							<View>
								<Text
									style={{ ...styles.text, ...styles.contentTitle }}
									numberOfLines={1}
								>
									{title}
								</Text>
							</View>
							<View style={styles.contentFooter}>
								<View style={styles.contentFooterRow}>
									<Ionicons
										name='time-outline'
										size={16}
										color={Colors.whiteColor}
										style={styles.icon}
									/>
									<Text style={styles.text}>{duration} min</Text>
								</View>
								<View style={styles.contentFooterRow}>
									<Ionicons
										name='ios-fast-food'
										size={16}
										color={Colors.whiteColor}
										style={styles.icon}
									/>
									<Text style={styles.text}>{complexity}</Text>
								</View>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>
		</Pressable>
	);
};

export default MealItem;

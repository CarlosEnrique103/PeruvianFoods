import { Pressable, Text } from "react-native";
import Styles from "./styles";

const CardCategory = ({ children, color, onNavigateMealCategory }) => {
	const styles = Styles(color);

	return (
		<Pressable style={styles.card} onPress={() => onNavigateMealCategory()}>
			<Text style={styles.cardText}>{children}</Text>
		</Pressable>
	);
};

export default CardCategory;

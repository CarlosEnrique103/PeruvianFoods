import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.secondaryColor,
	},
	listCategories: {
		flex: 1,
		width: "100%",
		padding: 10,
	},
});

export default styles;

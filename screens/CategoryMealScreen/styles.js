import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	categoryList: {
		width: "100%",
		backgroundColor: Colors.secondaryColor,
		paddingHorizontal: 5,
		marginBottom: 50,
	},
});

export default styles;

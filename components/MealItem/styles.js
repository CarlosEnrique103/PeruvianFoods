import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	mealItem: {
		flex: 1,
		height: 220,
		margin: 5,
		borderRadius: 20,
		overflow: "hidden",
	},
	imageBackground: {
		width: "100%",
		height: "100%",
	},
	content: {
		flex: 1,
		padding: 10,
		backgroundColor: "rgba(0,0,0,0.3)",
	},
	contentHeader: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		marginTop: 5,
		marginRight: 5,
	},
	contentBody: {
		flex: 1,
		justifyContent: "flex-end",
	},
	contentTitle: {
		fontSize: 18,
		marginBottom: 10,
		fontFamily: "Merriweather-Regular",
	},
	contentFooter: {
		flexDirection: "row",
		marginBottom: 10,
	},
	contentFooterRow: {
		flexDirection: "row",
		marginRight: 10,
		alignItems: "center",
	},
	mealItemText: {
		color: Colors.whiteColor,
		fontFamily: "Merriweather-Regular",
	},
	text: {
		color: Colors.whiteColor,
		fontSize: 14,
	},
	icon: {
		marginRight: 2,
	},
});

export default styles;

import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const Styles = (color) => {
	return StyleSheet.create({
		card: {
			flex: 1,
			justifyContent: "flex-end",
			height: 120,
			borderRadius: 20,
			backgroundColor: color,
			padding: 20,
			margin: 5,
		},
		cardText: {
			color: Colors.whiteColor,
			fontFamily: "Merriweather-Regular",
		},
	});
};

export default Styles;

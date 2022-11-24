import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	headerStyle: {
		backgroundColor: Colors.secondaryColor,
		borderWidth: 10,
		borderColor: "red",
	},
	headerTintColor: Colors.headerStackTitle,
	headerTitleStyle: {
		fontWeight: "bold",
		fontSize: 25,
		fontFamily: "Dancing",
	},
	tabBarStyle: {
		backgroundColor: Colors.secondaryColor,
	},
	tabBarLabelStyle: {
		fontSize: 12,
		fontFamily: "Merriweather-Regular",
	},
});

export default styles;

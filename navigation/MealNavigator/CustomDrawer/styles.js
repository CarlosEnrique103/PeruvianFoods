import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
	drawer: {
		flex: 1,
		justifyContent: "space-between",
	},
	drawerItem: {
		width: "100%",
		padding: 10,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	drawerItemText: {
		color: Colors.primaryColor,
		fontSize: 18,
	},
	drawerHeader: {
		flex: 2,
		justifyContent: "flex-end",
		backgroundColor: Colors.secondaryColor,
		padding: 10,
		borderBottomColor: Colors.primaryColor,
		borderBottomWidth: 1,
	},
	drawerHeaderImage: {
		flex: 1,
		justifyContent: "flex-end",
		paddingLeft: 20,
	},
	iconHeader: {
		width: 80,
		height: 80,
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 40,
	},
	drawerTitle: {
		fontFamily: "Dancing",
		fontSize: 40,
		color: Colors.blackColor,
	},
	drawerRecipes: {
		fontFamily: "Merriweather-Regular",
		fontSize: 14,
		color: Colors.blackColor,
		marginTop: 5,
	},
	drawerBody: {
		flex: 5,

		padding: 10,
	},
	drawerFooter: {
		flex: 1,
		paddingLeft: 20,
		backgroundColor: Colors.secondaryColor,
		borderTopColor: Colors.primaryColor,
		borderTopWidth: 1,
		justifyContent: "flex-start",
		paddingTop: 20,
	},
	drawerFooterText: {
		flexDirection: "row",
		alignItems: "center",
		color: Colors.primaryColor,
	},
});

export default styles;

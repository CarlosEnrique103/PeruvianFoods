import { Text, View, Pressable, SafeAreaView, Image } from "react-native";
import styles from "./styles";
import peru from "./../../../assets/peru.png";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

const CustomDrawer = ({ navigation }) => {
	const navigateScreen = (screen) => {
		navigation.navigate(screen);
	};

	return (
		<View style={styles.drawer}>
			<Pressable
				style={styles.drawerHeader}
				onPress={navigateScreen.bind(this, "Home")}
			>
				<View style={styles.drawerHeaderImage}>
					<Image source={peru} style={styles.iconHeader} />
				</View>
				<View>
					<Text style={styles.drawerTitle}>Peruvian Recipes</Text>
					<Text style={styles.drawerRecipes}>10 recipes</Text>
				</View>
			</Pressable>
			<View style={styles.drawerBody}>
				<Pressable
					style={styles.drawerItem}
					onPress={navigateScreen.bind(this, "Filters")}
				>
					<AntDesign name='filter' size={24} color={Colors.primaryColor} />
					<Text style={styles.drawerItemText}> Filters</Text>
				</Pressable>
				<Pressable
					style={styles.drawerItem}
					onPress={navigateScreen.bind(this, "Favorites")}
				>
					<AntDesign name='staro' size={24} color={Colors.primaryColor} />
					<Text style={styles.drawerItemText}> Favorites</Text>
				</Pressable>
			</View>
			<View style={styles.drawerFooter}>
				<View style={styles.drawerFooterText}>
					<EvilIcons name='question' size={24} color={Colors.primaryColor} />
					<Text> Help and Feedback</Text>
				</View>
			</View>
		</View>
	);
};

export default CustomDrawer;

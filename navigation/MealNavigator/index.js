import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./../../screens/CategoriesScreen";
import CategoryMealScreen from "./../../screens/CategoryMealScreen";
import MealDetailScreen from "./../../screens/MealDetailScreen";
import FavoritesScreen from "../../screens/FavoritesScreen";
import FiltersScreen from "../../screens/FiltersScreen";
import Colors from "../../constants/Colors";
import styles from "./styles";
import CustomDrawer from "./CustomDrawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MealStackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='CategoriesScreen'
			screenOptions={({ route: { params } }) => ({
				title: params?.name,
				headerStyle: styles.headerStyle,
				headerTintColor: styles.headerTintColor,
				headerTitleStyle: styles.headerTitleStyle,
				headerBackTitleVisible: false,
			})}
		>
			<Stack.Screen name='CategoriesScreen' component={CategoriesScreen} />
			<Stack.Screen name='CategoryMealScreen' component={CategoryMealScreen} />
			<Stack.Screen name='MealDetailScreen' component={MealDetailScreen} />
		</Stack.Navigator>
	);
};

const MealsTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName='meals'
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.tabBarStyle,
				tabBarActiveTintColor: Colors.tabBottomActive,
				tabBarInactiveTintColor: Colors.tabBottomInactive,
				tabBarLabelStyle: styles.tabBarLabelStyle,
			}}
		>
			<Tab.Screen
				name='Meals'
				component={MealStackNavigator}
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) =>
						focused ? (
							<Ionicons name='md-home' size={24} color={color} />
						) : (
							<Ionicons name='md-home-outline' size={24} color={color} />
						),
				}}
			/>
			<Tab.Screen
				name='Favorites'
				component={FavoritesScreen}
				options={{
					tabBarIcon: ({ color, focused }) =>
						focused ? (
							<AntDesign name='heart' size={24} color={color} />
						) : (
							<AntDesign name='hearto' size={24} color={color} />
						),
					headerShown: true,
					headerStyle: styles.headerStyle,
					headerTintColor: styles.headerTintColor,
					headerTitleStyle: styles.headerTitleStyle,
				}}
			/>
		</Tab.Navigator>
	);
};

const MealsDrawerNavigator = () => {
	return (
		<Drawer.Navigator
			useLegacyImplementation
			initialRouteName='Home'
			drawerContent={({ navigation }) => (
				<CustomDrawer navigation={navigation} />
			)}
			screenOptions={({ route: { name } }) => {
				return {
					headerShown: name === "Home" ? false : true,
					headerStyle: styles.headerStyle,
					headerTintColor: styles.headerTintColor,
					headerTitleStyle: styles.headerTitleStyle,
				};
			}}
		>
			<Drawer.Screen name='Home' component={MealsTabNavigator} />
			<Drawer.Screen name='Filters' component={FiltersScreen} />
			<Drawer.Screen name='Favorites' component={FavoritesScreen} />
		</Drawer.Navigator>
	);
};

const MealNavigator = () => {
	return (
		<NavigationContainer>
			<MealsDrawerNavigator />
		</NavigationContainer>
	);
};

export default MealNavigator;

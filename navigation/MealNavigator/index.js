import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "./../../screens/CategoriesScreen";
import CategoryMealScreen from "./../../screens/CategoryMealScreen";
import MealDetailScreen from "./../../screens/MealDetailScreen";
import styles from "./styles";
import FavoritesScreen from "../../screens/FavoritesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MealNavigator = () => {
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
		<NavigationContainer>
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
					component={MealNavigator}
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
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MealsTabNavigator;

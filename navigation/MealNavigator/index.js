import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./../../screens/CategoriesScreen";
import CategoryMealScreen from "./../../screens/CategoryMealScreen";
import MealDetailScreen from "./../../screens/MealDetailScreen";
import styles from "./styles";

const Stack = createNativeStackNavigator();

const MealNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='CategoriesScreen'
				screenOptions={({ route: { params } }) => ({
					title: params?.name,
					headerStyle: styles.headerStyle,
					headerTintColor: styles.headerTintColor,
					headerTitleStyle: styles.headerTitleStyle,
				})}
			>
				<Stack.Screen name='CategoriesScreen' component={CategoriesScreen} />
				<Stack.Screen
					name='CategoryMealScreen'
					component={CategoryMealScreen}
				/>
				<Stack.Screen name='MealDetailScreen' component={MealDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MealNavigator;

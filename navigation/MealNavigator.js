import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "../screens/CategoriesScreen.js";
import CategoryMealsScreen from "../screens/CategoryMealsScreen.js";
import FiltersScreen from "../screens/FiltersScreen.js";
import MealDetailScreen from "../screens/MealDetailScreen.js";
import FavoritesScreen from "../screens/FavoritesScreen.js";

import Colors from "../constants/Colors";
import HeaderButton from "../components/HeaderButton";

enableScreens(true);

const tintColorOS = Platform.OS === "ios" ? "white" : "black";
const backgroundColorOS =
  Platform.OS === "ios" ? Colors.primaryColorIOS : Colors.primaryColorAndroid;

const screenOptions = {
  headerStyle: {
    backgroundColor: backgroundColorOS,
  },
};

const mainCategoryOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButton icon="ios-menu" onPress={() => navigation.toggleDrawer()} />
  ),
  headerTintColor: Platform.OS === "ios" ? "white" : "black",
});

const tabOptions = {
  tabBarLabelPosition: "below-icon",
};

const mealOptions = {
  tabBarIcon: (tabInfo) => {
    return <MaterialIcons name="restaurant" size={24} color={tabInfo.color} />;
  },
  tabBarColor: Colors.primaryColorIOS,
  headerShown: false,
};

const favOptions = {
  tabBarIcon: (tabInfo) => {
    return <MaterialIcons name="star" size={24} color={tabInfo.color} />;
  },
  tabBarColor: Colors.accentColor,
};

const filterOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButton icon="ios-menu" onPress={() => navigation.toggleDrawer()} />
  ),
  headerShown: true,
  headerStyle: {
    backgroundColor: backgroundColorOS,
  },
  headerTintColor: tintColorOS,
});

const drawerOptions = {
  headerShown: false,
  drawerType: "front",
};

const Stack = createStackNavigator();

function MealNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={mainCategoryOptions}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: tintColorOS,
        })}
      />
      <Stack.Screen
        name="Details"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: tintColorOS,
        })}
      />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: Colors.accentColor } }}
    >
      <Stack.Screen
        name="FavStack"
        component={FavoritesScreen}
        options={{ title: "Favorites", headerTintColor: tintColorOS  }}
      />
      <Stack.Screen
        name="FavDetails"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.title, headerTintColor: tintColorOS })}
      />
    </Stack.Navigator>
  );
}

const Tab =
  Platform.OS === "ios"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator screenOptions={tabOptions} shifting={true}>
      <Tab.Screen
        name="Meals"
        component={MealNavigator}
        options={mealOptions}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={favOptions}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator screenOptions={drawerOptions}>
      <Drawer.Screen name="MainMenu" component={BottomTab} />
      <Drawer.Screen
        name="Filters"
        component={FiltersScreen}
        options={filterOptions}
      />
    </Drawer.Navigator>
  );
}

export default DrawerScreen;

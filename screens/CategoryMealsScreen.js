import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { id } = route.params;


  const availableMeals = useSelector(state => state.meals.filteredMeals)


  const displayedMeals = availableMeals.filter((meal) => {
    return meal.categoryIds.includes(id);
  });

  return (
    <View style={styles.screen}>
      <MealList navigation={navigation} listData={displayedMeals} routeName={'Details'}/>
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

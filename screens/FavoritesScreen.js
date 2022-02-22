import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = ({ navigation, route }) => {

  
  const favMeals  = useSelector(state => state.meals.favoriteMeals)

  if(favMeals.length === 0 || !favMeals){
    return (
      <View style={styles.screen}>
        <DefaultText>No favorite meals found. Start adding some</DefaultText>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <MealList navigation={navigation} listData={favMeals} routeName={'FavDetails'} />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

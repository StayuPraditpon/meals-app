import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { CATEGORIES, MEALS } from "../data/dummy-data.js";
import { useSelector } from "react-redux";
import MainMenuList from "../components/MainMenuList.js";

const windowDimensions = Dimensions.get("window");

const CategoriesScreen = ({ navigation, route }) => {
  const [window, setWindow] = useState(windowDimensions);

  const filteredMeal = useSelector((state) => state.meals.filteredMeals);
  const filteredCategoryIds = filteredMeal.map((item) => item.categoryIds);
  const filteredCategory = CATEGORIES.filter((category) => {
    return filteredCategoryIds.some((item) =>
      item.some((id) => id === category.id)
    );
  });
  

  function renderGridItem(itemData) {
    const { id, title } = itemData.item;

    const sourceBg = filteredMeal.filter((meal) =>
      meal.categoryIds.includes(id)
    );

    return (
      <MainMenuList
        title={title}
        style={{
          height: window.height * 0.2,
        }}
        imageUrl={sourceBg[0].imageUrl}
        onPress={() => {
          navigation.navigate("CategoryMeals", {
            title: title,
            id: id,
          });
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        contentContainerStyle={{ flexGlow: 1 }}
        data={filteredCategory}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1 )",
  },
});

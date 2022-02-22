import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

import MealItem from "./MealItem";

const window = Dimensions.get("window");

const MealList = (props) => {
  const navigation = props.navigation;
  const routeName = props.routeName;
  

  const [windowDimensions, setWindowDimensions] = useState(window);
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setWindowDimensions(window);
    });
    return () => subscription?.remove;
  });

  const renderMealItem = (renderItem) => {
    const {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
      steps,
      ingredients,
    } = renderItem.item;

    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity.toUpperCase()}
        affordability={affordability.toUpperCase()}
        onPress={() => {
          navigation.navigate(routeName, {
            title: title,
            id: id,
            steps: steps,
            ingredients: ingredients,
            imageUrl: imageUrl,
            duration: duration,
            complexity: complexity,
            affordability: affordability,
          });
        }}
        style={{
          width: windowDimensions.width * 0.9,
          height: windowDimensions.height * 0.3,
        }}
      />
    );
  };
  return (
    <View style={{ ...styles.mealItem, width: windowDimensions.width }}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    alignItems: "center",
  },
});

export default MealList;

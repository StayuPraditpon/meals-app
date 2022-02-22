import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals"


import MealItem from "../components/MealItem";
import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";

function ListItem(props) {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemText}>{props.children}</Text>
    </View>
  );
}

const MealDetailScreen = ({ navigation, route }) => {
  const {
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = route.params;
  
  const currentMealIsFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === id));

  const dispatch = useDispatch();
  
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(id));
  }, [dispatch, id]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton icon= {currentMealIsFav ?  "ios-star": "ios-star-outline"} onPress={toggleFavoriteHandler}/>,
    });
  }, [toggleFavorite, currentMealIsFav])


  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.cardContainer}>
          <MealItem
            title={title}
            imageUrl={imageUrl}
            duration={duration}
            complexity={complexity.toUpperCase()}
            affordability={affordability.toUpperCase()}
            onPress={() => {}}
          />
        </View>
        <View style={styles.ingredientsContainer}>
          <DefaultText>Ingredients</DefaultText>
          {ingredients.map((ingredient) => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}
        </View>
        <DefaultText>Steps</DefaultText>
        <View style={styles.stepsContainer}>
          {steps.map((step) => (
            <ListItem key={step}>{step}</ListItem>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    paddingBottom: 100,
    flex: 1,
    alignItems: "center",
  },
  cardContainer: {
    width: "90%",
    //TODO ipad image is not good
    height: 200,
  },
  ingredientsContainer: {
    width: "100%",

    alignItems: "center",
  },
  stepsContainer: {
    width: "100%",
    alignItems: "center",
  },
  listItemContainer: {
    width: "90%",
    alignItems: "flex-start",
    padding: 15,
    borderWidth: 0.6,
    borderRadius: 15,
    marginVertical: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  listItemText: {
    fontSize: 20,
  },
});

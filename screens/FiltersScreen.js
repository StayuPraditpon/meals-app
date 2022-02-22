import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { useDispatch } from "react-redux";

import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { setFilters } from "../store/actions/meals";

function FilterSwitch(props) {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.textFilter}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColorIOS }}
        thumbColor={Platform.OS === "ios" ? "white" : Colors.primaryColorIOS}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
}

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState();
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vetgetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, useDispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters() });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <DefaultText style={styles.headerText}>
          Avilable Filters/Restrictions
        </DefaultText>
      </View>
      <FilterSwitch
        label={"Gluten Free"}
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label={"Lactose Free"}
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label={"Vegan"}
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label={"Vegetarian"}
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    marginVertical: 50,
  },
  headerText: {
    fontSize: 20,
  },
  filterContainer: {
    marginVertical: 10,
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textFilter: {
    fontSize: 15,
  },
});

import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initailState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
  // availableMeals: MEALS,
};

const mealsReducer = (state = initailState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const exitingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (exitingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(exitingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }

    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vetgetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      // const filteredCategoryIds = updatedFilteredMeals.map(
      //   (item) => item.categoryIds
      // );
      // const filteredCategory = CATEGORIES.filter((category) => {
      //   return filteredCategoryIds.some((item) =>
      //     item.some((id) => id === category.id)
      //   );
      // });
      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
        // availableMeals: filteredCategory,
      };
    default:
      return state;
  }
};

export default mealsReducer;

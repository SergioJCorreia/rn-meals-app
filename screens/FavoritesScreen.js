import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";

import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

function FavoritesScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext)
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>No favorite meals</Text>
            </View>
        )
    }
    return (
        <MealsList items={favoriteMeals}></MealsList>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        color: "white"
    }

})

export default FavoritesScreen;
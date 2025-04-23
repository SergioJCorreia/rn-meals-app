import { MEALS } from "../data/dummy-data";
import { View, StyleSheet, Text, FlatList } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route}) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.includes(catId));
    console.log(displayedMeals);

    function renderMealItem(itemData) {
        return (
            <MealItem title={itemData.item.title}></MealItem>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
})

export default MealsOverviewScreen;
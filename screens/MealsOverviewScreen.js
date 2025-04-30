import { View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route, navigation}) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.includes(catId));

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(cat => cat.id === catId).title;
        navigation.setOptions({title: categoryTitle});
    }, [catId, navigation]);

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity,
            imageUrl: item.imageUrl,
        }

        const pressHandler = () => {
            navigation.navigate("MealDetails", {
                mealId: item.id
            });
        }

        return (
            <MealItem {...mealItemProps} onPress={pressHandler}></MealItem>
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
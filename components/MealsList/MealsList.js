import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

function MealsList({items}) {

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity,
            imageUrl: item.imageUrl,
        }

        return (
            <MealItem {...mealItemProps}></MealItem>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={items} keyExtractor={item => item.id} renderItem={renderMealItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
})

export default MealsList;
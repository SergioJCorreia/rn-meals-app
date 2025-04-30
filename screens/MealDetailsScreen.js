import { Text, View, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({route}) => {
    const mealId = route.params.mealId;
    const MealDetails = MEALS.find(mealItem => mealItem.id === mealId);

    return (
        <View style={styles.container}>
            <Text>Meal Details</Text>
            <Text>This is the details Screen of {MealDetails.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
})
export default MealDetailsScreen;
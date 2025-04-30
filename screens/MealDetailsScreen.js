import { Text, View, StyleSheet, Image } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailsScreen = ({route}) => {
    const mealId = route.params.mealId;
    const mealDetails = MEALS.find(mealItem => mealItem.id === mealId);

    return (
        <View style={styles.container}>
            <Image source={{uri: mealDetails.imageUrl}}/>
            <Text>{mealDetails.title}</Text>
            <MealDetails duration={mealDetails.duration} complexity={mealDetails.complexity}
                         affordability={mealDetails.affordability}></MealDetails>
            <Text>Ingredients</Text>
            {mealDetails.ingredients.map((ingredient) => (<Text key={ingredient}>{ingredient}</Text>))}
            <Text>Steps</Text>
            {mealDetails.steps.map((step) => (<Text key={step}>{step}</Text>))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
})
export default MealDetailsScreen;
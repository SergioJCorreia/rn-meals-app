import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailsScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const mealDetails = MEALS.find(mealItem => mealItem.id === mealId);

    function headerButtonPressHandler() {
        console.log("Button pressed!");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
            }
        });
    }, [navigation, headerButtonPressHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: mealDetails.imageUrl}} style={styles.image}/>
            <View style={styles.subtitleContainer}>
                <Text style={styles.title}>{mealDetails.title}</Text>
            </View>
            <MealDetails duration={mealDetails.duration} complexity={mealDetails.complexity}
                         affordability={mealDetails.affordability} textStyle={styles.detailText}></MealDetails>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={mealDetails.ingredients}></List>
                    <Subtitle>Steps</Subtitle>
                    <List data={mealDetails.steps}></List>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white"
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%",
    }

})
export default MealDetailsScreen;
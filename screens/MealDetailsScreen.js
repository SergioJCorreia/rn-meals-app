import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailsScreen = ({route, navigation}) => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const mealDetails = MEALS.find(mealItem => mealItem.id === mealId);

    // const isFavorite = favoriteMealsCtx.ids.includes(mealId);
    console.log(favoriteMealIds);
    const isFavorite = favoriteMealIds.includes(mealId);
    console.log(isFavorite);

    function changeFavoritesStatusHandler() {
        // if (isFavorite) {
        //     favoriteMealsCtx.removeFavorite(mealId);
        // } else {
        //     favoriteMealsCtx.addFavorite(mealId);
        // }

        if (isFavorite) {
            dispatch(removeFavorite({id: mealId}));
        } else {
            dispatch(addFavorite({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={isFavorite ? "star" : "star-outline"} color="white"
                                   onPress={changeFavoritesStatusHandler}/>
            }
        });
    }, [navigation, changeFavoritesStatusHandler])

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
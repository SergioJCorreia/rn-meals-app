import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import * as SystemUI from 'expo-system-ui';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { store } from "./store/redux/store";
// import FavoritesContextProvider from "./store/context/favorites-context";

SystemUI.setBackgroundColorAsync("#24180f");
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: "#351401"},
            headerTintColor: "white",
            sceneStyle: {backgroundColor: "#3f2f25"},
            drawerContentStyle: {backgroundColor: "#351401"},
            drawerInactiveTintColor: "white",
            drawerActiveTintColor: "#351401",
            drawerActiveBackgroundColor: "#e4baa1",
        }}>
            <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
                title: "All Categories",
                drawerIcon: ({color, size}) => (<Ionicons name="list" size={size} color={color}/>),
            }}/>
            <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
                drawerIcon: ({color, size}) => (<Ionicons name="star" size={size} color={color}/>),
            }}/>
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            {/*<FavoritesContextProvider>*/}
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: {backgroundColor: "#351401"},
                        headerTintColor: "white",
                        contentStyle: {backgroundColor: "#3f2f25"}
                    }}>
                        <Stack.Screen name="Drawer" component={DrawerNavigator}
                                      options={{
                                          headerShown: false,
                                      }}/>
                        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
                            // options={({route, navigation}) => {
                            //     const catId = route.params.categoryId;
                            //     return {title: catId};
                            // }}
                        />
                        <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{
                            title: "Meal Details"
                        }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
            {/*</FavoritesContextProvider>*/}
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});

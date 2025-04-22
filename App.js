import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import * as SystemUI from 'expo-system-ui';

SystemUI.setBackgroundColorAsync("#24180f");

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <CategoriesScreen/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

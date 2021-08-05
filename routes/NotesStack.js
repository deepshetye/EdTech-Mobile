import { createStackNavigator } from "react-navigation-stack";
import Notes from "../pages/notes/Notes";
import Header from '../shared/Header';
import React from 'react';

const screens = {
    Notes: {
        screen: Notes,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='EdTech' />
            }
        }
    }
}

const NotesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 70 }
    }
})

export default NotesStack;
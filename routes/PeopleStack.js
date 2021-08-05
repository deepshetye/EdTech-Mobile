import { createStackNavigator } from "react-navigation-stack";
import People from "../pages/people/People";
import Header from '../shared/Header';
import React from 'react';

const screens = {
    People: {
        screen: People,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='EdTech' />
            }
        }
    }
}

const PeopleStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 70 }
    }
})

export default PeopleStack;
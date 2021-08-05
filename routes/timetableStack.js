import { createStackNavigator } from "react-navigation-stack";
import Timetable from "../pages/timetable/Timetable";
import Header from '../shared/Header';
import React from 'react';

const screens = {
    Timetable: {
        screen: Timetable,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='EdTech' />
            }
        }
    }
}

const TimetableStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 70 }
    }
})

export default TimetableStack;
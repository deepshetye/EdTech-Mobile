import { createStackNavigator } from "react-navigation-stack";
import About from "../pages/about/About";
import Header from '../shared/Header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='EdTech' />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#f5f5f5',
        headerStyle: { backgroundColor: '#f5f5f5', height: 70 }
    }
})

export default AboutStack;
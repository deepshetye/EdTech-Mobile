import { createStackNavigator } from "react-navigation-stack";
import Portion from "../pages/portion/Portion";
import Header from '../shared/Header';
import React from 'react';

const screens = {
    Portion: {
        screen: Portion,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='EdTech' />
            }
        }
    }
}

const PortionStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 70 }
    }
})

export default PortionStack;
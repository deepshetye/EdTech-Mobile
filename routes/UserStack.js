import { createStackNavigator } from "react-navigation-stack";
import User from "../pages/user/User";
import Header from '../shared/Header';
import React from 'react';

const screens = {
    User: {
        screen: User,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='EdTech' />
            }
        }
    }
}

const UserStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 70 }
    }
})

export default UserStack;
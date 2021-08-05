import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Textbook from "../pages/textbook/Textbook";
import BookList from "../pages/textbook/BookList";
import Header from '../shared/Header';
import React from 'react';

const screens = {
    Textbook: {
        screen: Textbook,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='EdTech' />
            }
        }
    },
    BookList: {
        screen: BookList
    }
}

const TextbookStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 70 }
    }
})

export default createAppContainer(TextbookStack);
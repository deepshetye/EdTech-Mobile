import { createStackNavigator } from "react-navigation-stack";
import Recommendation from "../pages/recommendation/Recommendation";
import Header from '../shared/Header';
import React from 'react';

const screens = {
    Recommendation: {
        screen: Recommendation,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='EdTech' />
            }
        }
    }
}

const RecommendationStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 70 }
    }
})

export default RecommendationStack;
import { View, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLoginPage from './MainLoginPage';
import Login from './Login';
import SignUp from './SignUp';

const Stack = createStackNavigator();

export default class LoginRoute extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="LoginHomePage" component={MainLoginPage} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Sign Up" component={SignUp} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    }
})
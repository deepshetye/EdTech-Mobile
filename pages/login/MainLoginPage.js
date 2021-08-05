import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

export default class MainLoginPage extends  React.Component{
    render() {

        this.props.navigation.setOptions({
            headerBackTitle: '',
            headerShown: false
        })

        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source= {require('../../assets/images/LoginPageImage.png')}
                />
                <Text style={styles.boldText} >Hello!</Text>
                <Text style={styles.paragraph} >Register now to get access to Notes, Textbooks, Timebable and Many More..</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity 
                        style={styles.loginButton}
                        onPress={ () => this.props.navigation.navigate('Login') }
                    >
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.registerButton}
                        onPress={ () => this.props.navigation.navigate('Sign Up') }
                    >
                        <Text style={{textAlign: 'center', color: '#000', fontSize: 18}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 16, marginTop: 5}}>Or Via Social Accounts</Text>
                <View style={styles.socialButtons}>

                    <View style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50/2,
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#3f51b5',
                    }}>
                        <FontAwesome name="facebook" size={24} color="white" />
                    </View>
                    
                    <View style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50/2,
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#d32f2f'
                    }}>
                        <FontAwesome name="google" size={24} color="white" />
                    </View>

                    {/* <View style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50/2,
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#03a9f4'
                    }}>
                        <FontAwesome name="twitter" size={24} color="white" />
                    </View>

                    <View style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50/2,
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#000'
                    }}>
                        <SimpleLineIcons name="social-github" size={24} color="white" />
                    </View> */}
                    
                </View>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain'
    },
    boldText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    paragraph: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20
    },
    buttons: {
        flexDirection: 'row',
        margin: 20,
        paddingVertical: 10,
    },
    loginButton: {
        backgroundColor: '#0d47a1', 
        padding: 10,
        width: 150,
        borderRadius: 30,
        marginHorizontal: 2
    },
    registerButton: {
        backgroundColor: '#fff', 
        padding: 10,
        width: 150,
        borderRadius: 30,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: '#0d47a1'
    },
    socialButtons: {
        flexDirection: 'row',
        marginTop: 20
    }
})
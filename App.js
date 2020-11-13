import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import {Icon} from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import {HomeScreen} from "./Screens/HomeScreen";
import {InfoScreen} from "./Screens/InfoScreen";

const Tab = createBottomTabNavigator();

export default class App extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home">
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon type="material-community" name="home" color={color} size={size} />
                                ),
                        }}
                    />
                    <Tab.Screen
                        name="Info"
                        component={InfoScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon type="antdesign" name="infocirlce" color={color} size={size} />
                                ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

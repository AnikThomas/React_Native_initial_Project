import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import ExpoConstants from 'expo-constants';
//Expo constant: provide system infomation that remain constant throughout thelife time of app installation

const DirectoryNavigator = createStackNavigator(
    //createStackNavigator is a function & it has require argument called route confict obj,in this argument
    //where we set what component will be available for the stack,we set this to Directory & CampsiteInfo
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        // Additional configuration via an optional second argument, 
        // one configuration is the initial route name, 
        // which we will set as Directory so that when navigator 
        // is opened it will default showing that argument.
        InitialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }   
    }   
);
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About}
    },
    {
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact}
    },
    {
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator},
        Contact: { screen: ContactNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

const AppNavigator = createAppContainer(MainNavigator);
//createAppContainer: will return a react component that handles connecting our top
//level navigator to the react native application environment to handle some function
//such as responding to the back button.

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : ExpoConstants.statusBarHeight
                }}>
                <AppNavigator/>
            </View>
        );
    }
}

export default Main;

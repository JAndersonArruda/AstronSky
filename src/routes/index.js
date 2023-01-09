import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import Preload from '../pages/Preload';
import SigIn from '../pages/SigIn';
import SigUp from '../pages/SigUp';
import Home from '../pages/Home';
import News from '../pages/News';
import Galerie from '../pages/Galerie';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';


const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Preload'>
                <Stack.Screen name='Preload' component={Preload} />
                <Stack.Screen name='SigIn' component={SigIn} />
                <Stack.Screen name='SigUp' component={SigUp} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='News' component={News} />
                <Stack.Screen name='Galerie' component={Galerie} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='EditProfile' component={EditProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes

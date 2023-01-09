import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

import Preload from '../pages/Preload';
import SigIn from '../pages/SigIn';
import SigUp from '../pages/SigUp';
import Home from '../pages/Home';
import Galerie from '../pages/Galerie';
import News from '../pages/News';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';


// const MainTab = () => {
//     <Tab.Navigator initialRouteName='Home'>
//         <Tab.Screen name='Home' component={Home} />
//         <Tab.Screen name='Galerie' component={Galerie} />
//     </Tab.Navigator>
// }

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Preload'>
                <Stack.Screen name='Preload' component={Preload} />
                <Stack.Screen name='SigIn' component={SigIn} />
                <Stack.Screen name='SigUp' component={SigUp} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Galerie' component={Galerie} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes

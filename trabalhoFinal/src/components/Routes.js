import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Icon from 'react-native-vector-icons/Feather';
import Lista from './Lista';
import Feito from './Feito';
import NovaTarefa from './NovaTarefa';
import Editar from './Editar';


const Rota = createBottomTabNavigator();

export function RotasPrincipal() {
    return (
            <Rota.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: "#FF3F35", inactiveTintColor: "#676767", labelStyle: {fontSize: 15} }}>
                <Rota.Screen component={Home} name="Home" options={{ tabBarIcon: ({ color }) => (<Icon name="home" size={22} color={color}></Icon>), }}></Rota.Screen>
                <Rota.Screen component={Lista} name="Lista" options={{ tabBarIcon: ({ color }) => (<Icon name="plus-square" size={22} color={color}></Icon>), }}></Rota.Screen>
                <Rota.Screen component={Feito} name="Feito" options={{ tabBarIcon: ({ color }) => (<Icon name="check-circle" size={22} color={color}></Icon>), }}></Rota.Screen>
            </Rota.Navigator>
    )
}

const RotaSecundaria = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <RotaSecundaria.Navigator initialRouteName="Principal">
                <RotaSecundaria.Screen component={RotasPrincipal} name="Principal" options={{headerShown: false}}></RotaSecundaria.Screen>
                <RotaSecundaria.Screen component={NovaTarefa} name="Add" options={{headerShown: false}}></RotaSecundaria.Screen>
                <RotaSecundaria.Screen component={Editar} name="Editar" options={{headerShown: false}}></RotaSecundaria.Screen>
            </RotaSecundaria.Navigator>
        </NavigationContainer>
    )
}
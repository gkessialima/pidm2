import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Cadastro from './Cadastro';
import Editar from './Editar';
import Excluir from './Excluir';


const Rota = createStackNavigator();

export default function Rotas(){
    return(
        <NavigationContainer>
            <Rota.Navigator initialRouteName="Home">
                <Rota.Screen component={Home} name="Home" options={{headerShown: false}}></Rota.Screen>
                <Rota.Screen component={Cadastro} name="Cadastrar"></Rota.Screen>
                <Rota.Screen component={Excluir} name="Excluir"></Rota.Screen>
                <Rota.Screen component={Editar} name="Editar"></Rota.Screen>
            </Rota.Navigator>
        </NavigationContainer>
    )
}
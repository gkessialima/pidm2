import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { estilo } from '../Style'

export class Navbar extends Component {
    render() {
        return (
            <View style={estilo.navbar}>
                <Text style={estilo.navbarTitle}>
                    Lembrete
                </Text>
            </View>
        )
    }
}

export default Navbar

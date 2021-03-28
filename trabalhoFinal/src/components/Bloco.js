import React, { Component } from 'react'
import { View } from 'react-native'
import { estilo } from '../Style'

export class Bloco extends Component {
    render() {
        return (
            <View style={estilo.bloco}>
                {this.props.children}
            </View>
        )
    }
}

export default Bloco

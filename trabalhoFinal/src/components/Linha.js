import React, { Component } from 'react'
import { View } from 'react-native'
import { estilo } from '../Style'

export class Linha extends Component {
    render() {
        return (
            <View style={estilo.linha}>
                {this.props.children}
            </View>
        )
    }
}

export default Linha

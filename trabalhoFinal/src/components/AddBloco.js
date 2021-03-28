import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { estilo } from '../Style'

export class AddBloco extends Component {
    render() {
        return (
            <TouchableOpacity style={estilo.bloco} onPress={this.props.click}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

export default AddBloco

import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export class Editar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: this.props.route.params.nome,
            curso: this.props.route.params.curso,
            idade: this.props.route.params.idade,
        }
    }

    editar = () => {
        firestore()
            .collection('alunos')
            .doc(this.props.route.params.id)
            .update({
                nome: this.state.nome,
                curso: this.state.curso,
                idade: this.state.idade,
            })
            .then(() => {
                this.props.navigation.navigate('Home')
            });
    }

    render() {
        return (
            <View>
                <TextInput value={this.state.nome} onChangeText={(nome) => { this.setState({ nome }) }}></TextInput>
                <TextInput value={this.state.curso} onChangeText={(curso) => { this.setState({ curso }) }}></TextInput>
                <TextInput value={this.state.idade} onChangeText={(idade) => { this.setState({ idade }) }}></TextInput>
                <Button title="Editar" onPress={() => { this.editar() }}></Button>
            </View>
        )
    }
}

export default Editar

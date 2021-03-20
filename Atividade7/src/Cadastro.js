import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';


export class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            curso: "",
            idade: "",
        }
    }

    cadastrar = () => {
        firestore()
            .collection('alunos')
            .add({
                nome: this.state.nome,
                curso: this.state.curso,
                idade: this.state.idade
            })
            .then(() => {
                this.props.navigation.navigate('Home');
            });
    }

    render() {
        return (
            <View>
                <TextInput placeholder="Nome" onChangeText={(nome) => { this.setState({ nome }) }}></TextInput>
                <TextInput placeholder="Curso" onChangeText={(curso) => { this.setState({ curso }) }}></TextInput>
                <TextInput placeholder="Idade" onChangeText={(idade) => { this.setState({ idade }) }}></TextInput>
                <Button title="Cadastrar" onPress={() => { this.cadastrar() }}></Button>
            </View>
        )
    }
}

export default Cadastro

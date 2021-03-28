import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { estilo } from '../Style'
import Navbar from './Navbar'
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';

export class Editar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titulo: this.props.route.params.nome,
            hora: this.props.route.params.hora,
            id: this.props.route.params.id,
        }
    }

    cadastrar = () => {
        firestore()
            .collection('lembrete')
            .doc(this.state.id)
            .update({
                nome: this.state.titulo,
                hora: this.state.hora,
                id: this.state.id
            })
            .then(() => {
                this.props.navigation.goBack()
            });
    }

    render() {
        return (
            <View>
                <Navbar></Navbar>

                <View style={estilo.body}>
                    <View style={estilo.listaTop}>
                        <Text style={estilo.listaTitle}>
                            Nova tarefa
                        </Text>
                        <Icon name="x" color="#5D5D5D" size={24} onPress={() => { this.props.navigation.goBack() }}></Icon>
                    </View>

                    <View>
                        <TextInput defaultValue={this.state.titulo} style={estilo.inputText} onChangeText={(titulo) => { this.setState({ titulo }) }}></TextInput>
                        <TextInput defaultValue={this.state.hora} style={estilo.inputText} onChangeText={(hora) => { this.setState({ hora }) }}></TextInput>
                        <Button title="Atualizar" onPress={() => { this.cadastrar() }}></Button>
                    </View>
                </View>
            </View>
        )
    }
}

export default Editar

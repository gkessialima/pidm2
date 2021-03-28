import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { estilo } from '../Style'
import Navbar from './Navbar'
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';

export class NovaTarefa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titulo: "",
            hora: "",
        }
    }

    cadastrar = () => {
        firestore()
            .collection('lembrete')
            .add({
                nome: this.state.titulo,
                hora: this.state.hora,
                feito: false,
            })
            .then(() => {
                this.props.navigation.goBack()
            });
        this.setState({
            titulo: "",
            hora: "",
        })

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
                        <TextInput placeholder="Adicione o título do seu lembrete" style={estilo.inputText} onChangeText={(titulo) => { this.setState({ titulo }) }}></TextInput>
                        <TextInput placeholder="Horário" style={estilo.inputText} onChangeText={(hora) => { this.setState({ hora }) }}></TextInput>
                        <Button title="Adicionar" color="#1FC780" onPress={() => { this.cadastrar() }}></Button>
                    </View>
                </View>
            </View>
        )
    }
}

export default NovaTarefa

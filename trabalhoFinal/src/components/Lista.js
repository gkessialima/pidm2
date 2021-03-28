import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import { estilo } from '../Style'
import Linha from './Linha'
import Navbar from './Navbar'
import Icon from 'react-native-vector-icons/Feather';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import firestore from '@react-native-firebase/firestore';

export class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lembretes: []
        }
    }

    componentDidMount() {
        this.pegarLembrete()
    }

    componentDidUpdate() {
        this.pegarLembrete()
    }

    pegarLembrete = () => {
        const lembretes = firestore().collection('lembrete').get().then(
            resultado => {
                let lista = []
                resultado.forEach(lembrete => {
                    lista.push(lembrete)
                    // console.log(lembrete)
                })
                this.setState({
                    lembretes: lista,
                })
            }
        )
    }

    apagarLembrete = (id) => {
        firestore()
            .collection('lembrete')
            .doc(id)
            .delete()
            .then(() => {
                this.pegarLembrete();
            });
    }

    fazerAtividade = (id) => {
        firestore()
            .collection('lembrete')
            .doc(id)
            .update({
                feito: true
            })
            .then(() => {
                this.props.navigation.navigate("Feito")
            });
    }

    modal = (id, state) => {
        if (state === true) {
            Alert.alert(
                'Deletar',
                'Você deseja realmente excluir?',
                [
                    {
                        text: 'Cancelar',
                        onPress: () => this.pegarLembrete(),
                        style: 'cancel',
                    },
                    {
                        text: 'Deletar',
                        onPress: () => this.apagarLembrete(id)
                    },
                ],
                { cancelable: false },
            );
        }
    }

    modalFeito = (id, state) => {
        if (state === true) {
            Alert.alert(
                'Fazer',
                'Você deseja fazer essa atividade?',
                [
                    {
                        text: 'Cancelar',
                        onPress: () => this.pegarLembrete(),
                        style: 'cancel',
                    },
                    {
                        text: 'Fazer',
                        onPress: () => this.fazerAtividade(id)
                    },
                ],
                { cancelable: false },
            );
        }
    }


    render() {

        let lista = []

        if (this.state.lembretes !== []) {
            this.state.lembretes.map((busca, index) => {
                if (!busca.data().feito) {
                    return lista.push(
                        <Linha key={index}>
                            <View style={estilo.linhaSelect}>
                                <BouncyCheckbox
                                    size={20}
                                    fillColor="#BBBABA"
                                    unfillColor="#FFFFFF"
                                    iconStyle={{ borderColor: "#969696" }}
                                    onPress={() => {this.modalFeito(busca.id, true)}}
                                />
                            </View>
                            <View style={estilo.linhaTextos}>
                                <Text style={estilo.linhaTexto}>
                                    {busca.data().nome}
                                </Text>
                                <Text style={estilo.linhaHora}>
                                    {busca.data().hora}
                                </Text>
                            </View>
                            <View style={estilo.linhaBotoes}>
                                <Icon name="edit" color="#9A9A9A" size={20} onPress={() => { this.props.navigation.navigate("Editar", { nome: busca.data().nome, hora: busca.data().hora, id: busca.id }) }}></Icon>
                                <Icon name="x" color="#9A9A9A" size={20} onPress={() => { this.modal(busca.id, true) }}></Icon>
                                {/* <Icon name="x" color="#9A9A9A" size={20} onPress={() => { this.apagarLembrete(busca.id) }}></Icon> */}

                            </View>
                        </Linha>)
                }
            })
        }

        return (
            <View>
                <Navbar></Navbar>

                <View style={estilo.body}>
                    <View style={estilo.listaTop}>
                        <Text style={estilo.listaTitle}>
                            Lista
                        </Text>
                        <Icon name="plus-square" color="#FF655C" size={24} onPress={() => { this.props.navigation.navigate('Add') }}></Icon>
                    </View>

                    {lista}
                </View>
            </View>
        )
    }
}

export default Lista

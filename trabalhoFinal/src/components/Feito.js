import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import { estilo } from '../Style'
import Linha from './Linha'
import Navbar from './Navbar'
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';

export class Feito extends Component {
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

    render() {
        let lista = []

        if (this.state.lembretes !== []) {
            this.state.lembretes.map((busca, index) => {
                if (busca.data().feito) {
                    return lista.push(
                        <Linha key={index}>
                            <View style={estilo.linhaTextosFeito}>
                                <Text style={estilo.linhaTexto}>
                                    {busca.data().nome}
                                </Text>
                                <Text style={estilo.linhaHora}>
                                    {busca.data().hora}
                                </Text>
                            </View>
                            <View style={estilo.linhaBotoesFeito}>
                                <Icon name="x" color="#9A9A9A" size={20} onPress={() => { this.modal(busca.id, true) }}></Icon>
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
                            Feito
                        </Text>
                    </View>

                    {lista}

                </View>

            </View>
        )
    }
}

export default Feito

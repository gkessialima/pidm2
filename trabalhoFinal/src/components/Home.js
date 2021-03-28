import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { estilo } from '../Style'
import Bloco from './Bloco'
import Navbar from './Navbar'
import Icon from 'react-native-vector-icons/Feather';
import AddBloco from './AddBloco'
import firestore from '@react-native-firebase/firestore';

export class Home extends Component {
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

    render() {
        let lista = []

        if (this.state.lembretes !== []) {
            this.state.lembretes.map((busca, index) => {
                if (!busca.data().feito) {
                    return lista.push(
                        <Bloco key={index}>
                            <Text style={estilo.blocoTexto}>
                                {busca.data().nome}
                            </Text>
                            <Text style={estilo.blocoHora}>
                                {busca.data().hora}
                            </Text>
                        </Bloco>)
                }
            })
        }

        return (
            <View>
                <Navbar></Navbar>

                <View style={estilo.bodyBloco}>
                    <AddBloco click={() => { this.props.navigation.navigate("Add") }}>
                        <Text style={estilo.blocoTexto}>
                            <Icon name="plus" color="#1FC780" size={16}> Adicionar</Icon>
                        </Text>
                    </AddBloco>

                    {lista}

                </View>

            </View >
        )
    }
}

export default Home
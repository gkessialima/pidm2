import firestore from '@react-native-firebase/firestore';
import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alunos: [],
        }
    }

    componentDidMount() {
        this.pegarAlunos()
    }

    componentDidUpdate(){
        this.pegarAlunos()
    }

    pegarAlunos = () => {
        const alunos = firestore().collection('alunos').get().then(
            resultado => {
                let lista = []
                resultado.forEach(alunos => {
                    lista.push(alunos)
                })
                this.setState({
                    alunos: lista,
                })
            }
        )
    }

    render() {
        let linha = [];

        this.state.alunos.map((busca, index) => {
            linha.push(
                <View key={index}>
                    <Text style={{ fontSize: 30 }}>{busca.data().nome}</Text>
                    <Text style={{ fontSize: 30 }}>{busca.data().curso}</Text>
                    <Text style={{ fontSize: 30 }}>{busca.data().idade}</Text>
                    <Button title="Editar" onPress={() => { this.props.navigation.navigate("Editar", { nome: busca.data().nome, curso: busca.data().curso, idade: busca.data().idade, id: busca.id }) }}></Button>
                    <Button title="Excluir" color="red" onPress={()=>{this.props.navigation.navigate("Excluir", {id: busca.id})}}></Button>
                </View>
            )
        })

        return (
            <View>
                <Text style={{ fontSize: 30 }}>
                    Tabela de Alunos
                </Text>
                <Button title="Cadastrar" onPress={() => { this.props.navigation.navigate("Cadastrar") }}></Button>

                {linha}
            </View>
        )
    }
}

export default Home

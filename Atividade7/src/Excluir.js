import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export class Excluir extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.route.params.id
        }
    }

    excluir = () => {
        firestore()
            .collection('alunos')
            .doc(this.state.id)
            .delete()
            .then(() => {
                this.props.navigation.navigate("Home")
            });
    }

    render() {
        return (
            <View>
                <Text>
                    Você tem certeza disso?
                </Text>
                <Button title="Excluir" color="red" onPress={()=>{this.excluir()}}>
                </Button>
                <Button title="Cancelar" onPress={() => { this.props.navigation.navigate("Home") }}>
                </Button>
            </View>
        )
    }
}

export default Excluir

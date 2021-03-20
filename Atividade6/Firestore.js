import React, { Component } from 'react'
import firestore from '@react-native-firebase/firestore';
import { Text, View } from 'react-native';
export class Firestore extends Component {
    constructor(props){
        super(props)
        this.state={
          nome: "",
          curso: "",
          idade: ""
        }
        this.pegarAlunos()
      }
    
      pegarAlunos = async () =>{
        const resultado = await firestore().collection('alunos').doc('xD65WylIqJnQyoNJicas').get();
    
        this.setState({
          nome: resultado.data().nome,
          curso: resultado.data().curso,
          idade: resultado.data().idade,
        })
      }
    
      render() {
        return (
          <View>
            <Text style={{fontSize:30}}>
              Nome: {this.state.nome}
            </Text>
    
            <Text style={{fontSize:30}}>
              Curso: {this.state.curso}
            </Text>
    
            <Text style={{fontSize:30}}>
              Idade: {this.state.idade}
            </Text>
          </View>
        )
      }
}

export default Firestore

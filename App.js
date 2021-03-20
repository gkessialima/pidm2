import React, { Component } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Rotas from './Atividade7/src/Rotas'

export class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <Rotas></Rotas>
      </SafeAreaProvider>
    )
  }
}

export default App

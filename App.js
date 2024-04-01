import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import params from "./src/params"


export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Iniciando o Mines!!!</Text>
          <Text style={styles.instructions}>
          Tamanho da grade: {params.getRowsAmount()} X {params.getColumnsAmount()}
          </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  instructions: {

  },
})
import {
  Keyboard, Text, StatusBar, StyleSheet, KeyboardAvoidingView,
  TouchableWithoutFeedback, ActivityIndicator, Platform, View, TextInput
} from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
// import { Container, BoxForm } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
// import Topo from '../../components/Topo';
// import { Aviso } from '../../components';
import { AntDesign, Feather } from '@expo/vector-icons';
import MaskInput from 'react-native-mask-input';
// const [keyboard, setKeyboard] = useState(false);

export default function Feed() {
  return (
    <View style={styles.containertitulo}>
      <StatusBar backgroundColor={"#075490"/* cor do cabeçalho */} />
      <View>
        <View style={styles.caixatop}>
          <Text style={styles.title}>Check List</Text>
        </View>
        <View style={styles.caixacentro}>
          <Text style={styles.textocaixacentro}>   Este aplicativo pode ajudar mecânicas a manterre gistros precisos 
          e organizados de todas as verificações e manutenções realizadas em veículos, melhorando a eficiência, 
          a transparência e a satisfação do cliente.</Text>
          <Text style={styles.textocaixacentro}>   Este aplicativo pode ajudar mecânicas a manterre gistros precisos 
          e organizados de todas as verificações e manutenções realizadas em veículos, melhorando a eficiência, 
          a transparência e a satisfação do cliente.</Text>
        </View>
        <View style={styles.caixabotton} />
      </View>
      <Text style={styles.txtRodape2}>Orientadora Letícia Pieper.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //Conf Titulo
  containertitulo: {
    height: 500,
    // borderWidth: 1,
    flex: 1,
    backgroundColor: '#075490',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    top: 55,
    color: "#ffffff",
    fontSize: 42,
    fontWeight: 'bold'
  },
  RodapeLine: {
    borderBottomWidth: 2,
    borderColor: "#ffff00",
    width: '25%',
    height: 12
  },
  //Conf Titulo
  conteudo: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  caixatop: {
    flex: 1,
    top: 0,
    height: 150,
    width: 389,
    // borderWidth: 1,
    alignItems: 'center'
  },
  caixacentro: {
    flex: 1,
    // top: 10,
    height: 180,
    width: 389,
    // borderWidth: 1,
    // flex: 10,
    backgroundColor: '#075490'
  },
  textocaixacentro: {
    padding: 15,
    top: 10,
    fontSize: 18,
    color: '#ffffff',
    textAlign: "justify",
  },
  caixabotton: {
    flex: 1,
    top: 0,
    bottom: 10,
    // height: 150,
    // width: 389,
    // borderWidth: 1,
    alignItems: 'center'
  },
  txtRodape2: {
    // top: 2,
    bottom: 15,
    color: '#ffffff',
    textAlign: "center",
    fontSize: 12
  },
});
import { View, StyleSheet } from 'react-native'
import React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    <View>
      <Header title={'Adivina el numero'} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
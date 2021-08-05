import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function People() {
    return (
        <View style={styles.container}>
             <Text>People</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: "#fff",
      padding: 20,
    }
  });
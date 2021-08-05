import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Recommendation() {
    return (
        <View style={styles.container}>
            <Text>Recommendation</Text>
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
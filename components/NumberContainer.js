import { View, Text, StyleSheet } from 'react-native'

// constants
import colors from '../constants/colors'

function NumberContainer ({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.secondary,
    padding: 24,
    borderRadius: 5,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.secondary,
    fontSize: 36,
    fontWeight: 'bold'
  }
})

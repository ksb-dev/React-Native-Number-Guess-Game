import { Text, StyleSheet } from 'react-native'

// constants
import colors from '../constants/colors'

function Title ({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    letterSpacing: 1,
    textAlign: 'center',
    padding: 12,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 5
  }
})

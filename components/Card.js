import { View, StyleSheet } from 'react-native'

// constants
import colors from '../constants/colors'

function Card ({ children }) {
  return <View style={styles.card}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 5,
    padding: 16,
    backgroundColor: colors.primary800,

    // Shadow for android
    elevation: 4,

    // Shadow for IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25
  }
})

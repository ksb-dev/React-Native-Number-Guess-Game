import { Text, View, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

// constatnts
import colors from '../constants/colors'

function RoundList ({ roundNumber, guess }) {
  return (
    <View style={styles.roundList}>
      <Text style={styles.roundText}>#{roundNumber}</Text>
      <Text style={styles.roundText}>Bot's Guess: {guess}</Text>
    </View>
  )
}

export default RoundList

const styles = StyleSheet.create({
  roundList: {
    borderColor: colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4, // box shadow for android

    // box shadow for ios
    shadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  roundText: {
    fontFamily: 'nato-sans'
  }
})

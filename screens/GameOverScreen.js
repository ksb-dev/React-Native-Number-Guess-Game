import { Text, View, Image, StyleSheet } from 'react-native'

// components
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'

// constants
import colors from '../constants/colors'

function GameOverScreen ({ roundsNumber, userNumber, newGameHandler }) {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Bot took <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>

      <PrimaryButton onPress={newGameHandler}>Start New Gmae</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'nato-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: colors.primary500
  }
})

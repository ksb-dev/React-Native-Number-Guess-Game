import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
// constants
import colors from '../constants/colors'

// components
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import Card from '../components/Card'

function generateRandomBetween (min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen ({ userNumber, gameOverHandler }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler()
    }
  }, [currentGuess, userNumber, gameOverHandler])

  function nextGuessHandler (direction) {
    if (direction === 'lower' && currentGuess < userNumber) {
      Alert.alert('Number is higher', 'Press +', [
        { text: 'ok', style: 'cancel' }
      ])
      return
    }
    if (direction === 'higher' && currentGuess > userNumber) {
      Alert.alert('Number is lower', 'Press -', [
        { text: 'ok', style: 'cancel' }
      ])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRandomNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Bot's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <View>
          <Text style={styles.instructionText}>Higher or Lower?</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name='md-remove' size={24} color='white' />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                <Ionicons name='md-add' size={24} color='white' />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Card>

      <View>{/* LOG ROUNDS */}</View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 48
  },
  instructionText: {
    color: colors.secondary,
    letterSpacing: 1,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row'
    //justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1
  }
})

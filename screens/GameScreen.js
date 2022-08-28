import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
// constants
import colors from '../constants/colors'

// components
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import Card from '../components/Card'
import RoundList from '../components/RoundList'

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
  const [roundsList, setRoundsList] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler(roundsList.length)
    }
  }, [currentGuess, userNumber, gameOverHandler])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

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
    setRoundsList(preRoundGuess => [...preRoundGuess, newRandomNumber])
  }

  const roundsListLength = roundsList.length

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

      <View style={styles.listContainer}>
        {/* {roundsList.map((round, index) => (
          <Text key={index}>{round}</Text>
        ))} */}
        <FlatList
          data={roundsList}
          renderItem={itemData => (
            <RoundList
              roundNumber={roundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
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
    //fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'nato-sans'
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row'
    //justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
})

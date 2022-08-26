import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// components
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'

function generateRandomBetween (min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

function GameScreen ({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  function nextGuessHandler (direction) {
    if (direction === 'lower') {
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler}>-</PrimaryButton>
        </View>
      </View>
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
  }
})

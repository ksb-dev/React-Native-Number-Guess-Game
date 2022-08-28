import { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Alert } from 'react-native'

// constants
import colors from '../constants/colors'

// components
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import Card from '../components/Card'

function StartGameScreen ({ onConfirmHandler }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  // 1. Function for setting entered number
  function numberInputHandler (enteredInput) {
    setEnteredNumber(enteredInput)
  }

  // 2. Function for resetting entered number
  function resetInputHandler () {
    setEnteredNumber('')
  }

  // 3. Function for checking confirmed number
  function confirmInputHandler () {
    const confirmedNumber = parseInt(enteredNumber)

    if (
      isNaN(confirmedNumber) ||
      confirmedNumber <= 0 ||
      confirmedNumber > 99
    ) {
      Alert.alert('Invalid Number!', 'Enter number between 1 && 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
      ])
      return
    }

    // 4. If confirmed number is valid call onConfirmHandler()
    onConfirmHandler(confirmedNumber)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instructionText}>
          Enter a number to be guessed by bot
        </Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },

  instructionText: {
    fontFamily: 'nato-sans',
    color: colors.secondary,
    letterSpacing: 1,
    textTransform: 'capitalize',
    //fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: colors.secondary,
    color: colors.secondary,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1
  }
})

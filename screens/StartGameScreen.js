import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'

// constants
import colors from '../constants/colors'

// components
import PrimaryButton from '../components/PrimaryButton'

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
    <View style={styles.inputContainer}>
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
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 100,
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

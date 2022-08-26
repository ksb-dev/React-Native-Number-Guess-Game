import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

// components
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import colors from './constants/colors'

export default function App () {
  const [userNumber, setUserNumber] = useState()

  // 5. Function for switching to GameScreen if confirmed number is valid
  function onConfirmHandler (pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onConfirmHandler={onConfirmHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient
      colors={[colors.primary700, colors.secondary]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
})

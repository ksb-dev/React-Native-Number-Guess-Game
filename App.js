import { useState, useEffect, useCallback } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
//import AppLoading from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen'

// components
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'

export default function App () {
  const [userNumber, setUserNumber] = useState()
  const [isGameOver, setIsGameOver] = useState(true)
  const [roundsNumber, setRoundsNumber] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'nato-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'aboreto-regular': require('./assets/fonts/Aboreto-Regular.ttf')
  })

  // useEffect(() => {
  //   async function prepare () {
  //     await SplashScreen.preventAutoHideAsync()
  //   }

  //   prepare()
  // }, [])

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  // 5. Function for switching to GameScreen if confirmed number is valid
  function onConfirmHandler (pickedNumber) {
    setUserNumber(pickedNumber)
    setIsGameOver(false)
  }

  function gameOverHandler (numberOfRounds) {
    setIsGameOver(true)
    setRoundsNumber(numberOfRounds)
  }

  function newGameHandler () {
    setUserNumber(null)
    setRoundsNumber(0)
  }

  let screen = <StartGameScreen onConfirmHandler={onConfirmHandler} />

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    )
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        newGameHandler={newGameHandler}
      />
    )
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

import { View, Text, Pressable, StyleSheet } from 'react-native'

// constants
import colors from '../constants/colors'

function PrimaryButton ({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: colors.white }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
    //marginHorizontal: 8
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: colors.white,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 1
  },
  pressed: {
    opacity: 0.75
  }
})

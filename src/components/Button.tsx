import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'


type ButtonProps = TouchableOpacityProps & {
title: string
loading?: boolean
}

export const Button = ({
  title,
  onPress,
  disabled,
  loading,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading

  return (
    <TouchableOpacity
      onPress={isDisabled? undefined : onPress}
      disabled={isDisabled}
      {...rest}
      style={[
        styles.button,
        isDisabled && styles.disabled,
        rest.style
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  disabled: {
    backgroundColor: '#ccc',
    opacity: 0.6,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, text }) => (
  <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#8f15af' : '#841584'}, styles.button]} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginTop: 20,
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 50,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 0.75,
  },
});

export default Button;

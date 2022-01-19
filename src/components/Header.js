import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Dad Jokes Generator</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});

export default Header;

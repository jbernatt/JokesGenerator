import { View, Text, StyleSheet } from 'react-native';

const Joke = ({ joke, category }) => (
  <View style={styles.joke}>
    <Text style={styles.jokeCategory}>
      Category: {category === 'Any' ? 'Random' : category}
    </Text>
    <Text style={styles.jokeText}>
      {joke === null
        ? 'Click button below to see a joke'
        : joke === undefined
        ? 'No results... Try again.'
        : joke}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  joke: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    minHeight: 350,
    borderRadius: 20,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  jokeCategory: {
    fontSize: 22,
    color: '#841584',
    fontWeight: 'bold',
    paddingVertical: 15,
    textAlign: 'center',
  },
  jokeText: {
    fontSize: 17,
    lineHeight: 30,
    letterSpacing: 0.5,
  },
});

export default Joke;

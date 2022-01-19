import { StyleSheet, TextInput, View, Image } from 'react-native';

const SearchForm = ({ onSetSearchValue, onSubmit, searchValue }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search joke by word"
        value={searchValue}
        onChangeText={(e) => onSetSearchValue(e)}
        onSubmitEditing={onSubmit}
        returnKeyType={'search'}
      />
      <View style={styles.searchButton}>
        <Image
          style={styles.icon}
          source={require('../../assets/search.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    position: 'relative',
  },
  searchInput: {
    fontWeight: '500',
    height: '100%',
    width: '90%',
    borderColor: '#841584',
    borderWidth: 2,
    borderRadius: 20,
    color: '#000',
    backgroundColor: '#FAC563',
    paddingLeft: 45,
    paddingVertical: 5,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
    top: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default SearchForm;

import { useState } from 'react';
import { StatusBar, StyleSheet, Modal, ImageBackground } from 'react-native';
import Header from './src/components/Header';
import SearchForm from './src/components/SearchForm';
import Button from './src/components/Button';
import Joke from './src/components/Joke';
import CategoryCard from './src/components/CategoryCard';

const image = require('./assets/bg.png');

const App = () => {
  const [joke, setJoke] = useState(null);
  const [category, setCategory] = useState('Any');
  const [searchValue, setSearchValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const fetchJoke = async () => {
    const response = await fetch(
      `https://v2.jokeapi.dev/joke/${category}?type=single&contains=${searchValue}`
    );
    const responseJSON = await response.json();
    setJoke(responseJSON.joke);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setJoke(null);
    setModalVisible(!modalVisible);
  };

  const handleSearchSubmit = () => {
    setCategory('Any');
    fetchJoke();
    setSearchValue('');
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <Header />
      <SearchForm
        searchValue={searchValue}
        onSetSearchValue={setSearchValue}
        onSubmit={handleSearchSubmit}
      />
      <Joke joke={joke} category={category} />
      <Button text={'🔥 Generate Joke 🔥'} onPress={() => fetchJoke()} />
      <Button
        text={'🌸 Select Category 🌸'}
        onPress={() => setModalVisible(true)}
      />

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <ImageBackground source={image} resizeMode="cover" style={styles.modal}>
          <CategoryCard
            category={'Random'}
            onPress={() => handleCategoryChange('Any')}
          />
          <CategoryCard
            category={'Programming'}
            onPress={() => handleCategoryChange('Programming')}
          />
          <CategoryCard
            category={'Misc'}
            onPress={() => handleCategoryChange('Misc')}
          />
          <CategoryCard
            category={'Dark'}
            onPress={() => handleCategoryChange('Dark')}
          />

          <Button
            text={'← Back'}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </ImageBackground>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

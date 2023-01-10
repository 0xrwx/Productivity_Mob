import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MyButton} from './MyButton';

export const Motivational = () => {
  let [quote, setQuote] = React.useState('');
  let [source, setSource] = React.useState('');

  const fetchApiCall = () => {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'quotes15.p.rapidapi.com',
        'x-rapidapi-key': '3434f4eab0mshbd6b6ba4ea777aep19d57ejsnadde1bbd7df6',
      },
    })
      .then(response => response.json())
      .then(response => {
        setQuote(response.content);
        setSource(response.originator.name);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const backgroundImage = require('../images/inspiration_image.jpeg');

  return (
    <ScrollView>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.Motivational__container}>
          <Text style={styles.Motivational__quote}>{quote}</Text>
          <Text style={styles.Motivational__author}>{source}</Text>
        </View>
        <MyButton text={'Inspire me'} function={fetchApiCall} />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Motivational__container: {
    margin: 30,
    minHeight: 300,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 700,
  },
  Motivational__quote: {
    fontSize: 25,
    color: 'white',
  },
  Motivational__author: {
    color: 'white',
    backgroundColor: 'crimson',
    width: 100,
    textAlign: 'center',
    marginTop: 5,
  },
});

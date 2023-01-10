import {ScrollView, StyleSheet, View} from 'react-native';
import {MyButton} from './MyButton';
import {Note} from './Note';
import React from 'react';

export const Notes = () => {
  const [texts, setTexts] = React.useState([]);
  const [text, onChangeText] = React.useState('Useless Text');

  const [notes, setNotes] = React.useState([]);

  const deleteItem = id => {
    setTexts(texts.filter((_, i) => i !== id));
    console.log(id);
  };

  const onAddNote = event => {
    setNotes(notes.concat(<Note key={notes.length} />));
  };

  return (
    <ScrollView>
      <View style={{marginTop: 5}}>
        {texts.map((_, i) => (
          <Note onDelete={deleteItem.bind(this, i)} />
        ))}
      </View>
      <View style={{marginTop: 20}} />
      <MyButton
        text={'Create new one'}
        function={() => {
          setTexts(texts.concat(text));
        }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Note__container: {
    margin: 30,
    padding: 10,
    backgroundColor: 'cadetblue',
  },
  Note__textInput: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'burlywood',
    fontSize: 20,
  },
  Note__button: {
    paddingTop: 40,
  },
});

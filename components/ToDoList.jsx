import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {ToDoItem} from './ToDoItem';
import React from 'react';
import {MyButton} from './MyButton';

export const ToDoList = () => {
  const [text, onChangeText] = React.useState('Basic task');
  const [texts, setTexts] = React.useState([]);

  const deleteItem = id => {
    setTexts(texts.filter((_, i) => i !== id));
    console.log(id);
  };

  return (
    <ScrollView>
      <View style={{marginTop: 5}}>
        {texts.map((text, i) => (
          <ToDoItem
            description={i + 1 + '. ' + text}
            onDelete={deleteItem.bind(this, i)}
          />
        ))}
      </View>
      <TextInput
        style={styles.ToDoList__textInput}
        onChangeText={onChangeText}
        placeholder="Task..."
      />

      <MyButton
        text={'Add new task'}
        function={() => setTexts(texts.concat(text))}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ToDoList__textInput: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'burlywood',
    fontSize: 20,
  },
  ToDoList__button: {
    height: 100,
  },
});

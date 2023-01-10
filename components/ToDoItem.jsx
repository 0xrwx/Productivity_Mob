import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';

export const ToDoItem = props => {
  return (
    <View style={{marginTop: 10}}>
      <Text style={styles.toDoItem__text}>{props.description}</Text>
      <TouchableHighlight
        style={styles.ToDoItem__button}
        onPress={() => {
          props.onDelete();
        }}>
        <Text />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  toDoItem__text: {
    height: 30,
    marginLeft: 10,
    fontSize: 20,
  },
  ToDoItem__button: {
    marginTop: -25,
  },
});

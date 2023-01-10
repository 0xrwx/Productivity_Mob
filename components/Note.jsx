import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export const Note = props => {
  return (
    <View style={styles.Note__container}>
      <TouchableHighlight
        style={styles.Note__button}
        onPress={() => {
          props.onDelete();
        }}>
        <Text />
      </TouchableHighlight>
      <TextInput
        style={{backgroundColor: '#F7F4F3'}}
        multiline={true}
        placeholder="Title..."
      />

      <View style={{minHeight: 200}}>
        <TextInput
          style={styles.Note__body}
          multiline={true}
          placeholder="Body..."
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Note__container: {
    margin: 30,
    padding: 10,
    backgroundColor: '#C3B9B8',
    borderRadius: 15,
  },
  Note__title: {
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: '#EAE6E5',
  },
  Note__body: {
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: '#EAE6E5',
  },
  Note__button: {
    backgroundColor: '#FF605C',
    marginBottom: 20,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

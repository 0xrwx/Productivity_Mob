import {Button, StyleSheet, View} from 'react-native';
import React from 'react';

export const MyButton = props => {
  return (
    <View style={styles.MyButton__container}>
      <Button title={props.text} color="salmon" onPress={props.function} />
    </View>
  );
};

const styles = StyleSheet.create({
  MyButton__container: {
    width: 300,
    alignSelf: 'center',
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Components
const Note = () => {
  const [text, setText] = useState('');
  return (
    <View
      style={{
        margin: 30,
        padding: 10,
        backgroundColor: 'cadetblue',
      }}>
      <TextInput style={{backgroundColor: 'cornsilk'}} multiline={true} />

      <TextInput
        style={{marginTop: 20, marginBottom: 40, backgroundColor: 'burlywood'}}
        multiline={true}
      />

      <Button
        title="Press me"
        color="#841584"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

      {/*<Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>*/}
    </View>
  );
};

// Pages
// Page 1
function ToDoScreen() {
  return (
    <View>
      <Text>To-Do List page</Text>
      <Text>Is from dev</Text>
    </View>
  );
}

// Page 2
function NotesScreen() {
  return (
    <View>
      <Text>Notes Page</Text>

      <Note />
      <Note />
    </View>
  );
}

// Page 3
function MotivationalScreen() {
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
  return (
    <TouchableHighlight onPress={fetchApiCall}>
      <View>
        <TouchableHighlight onPress={fetchApiCall}>
          <View
            style={{
              padding: 10,
              marginVertical: 15,
              backgroundColor: '#0645AD',
            }}>
            <Text style={{color: '#fff'}}>Use Fetch API</Text>
          </View>
        </TouchableHighlight>
        <View>
          <Text>{quote}</Text>
          <Text>{source}</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableHighlight>
  );
}
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="To-Do List" component={ToDoScreen} />
        <Drawer.Screen name="Notes" component={NotesScreen} />
        <Drawer.Screen name="Motivational" component={MotivationalScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
/*const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};*/

/*const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Custom
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};*/

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

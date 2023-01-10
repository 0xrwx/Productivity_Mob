import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NotesScreen} from './screens/NotesScreen';
import {ToDoScreen} from './screens/ToDoScreen';
import {MotivationalScreen} from './screens/MotivationalScreen';

const App = () => {
  const Drawer = createDrawerNavigator();
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

export default App;

// style={{width: 100, margin: 10, borderWidth: 1, borderColor: 'brown'}}
// const ToDoItem = props => {
//   return (
//     <View>
//       <View style={styles_to_do.u_item}>
//         <Text style={{height: 20}}>{props.description}</Text>
//         <View style={{width: 10, height: 10, backgroundColor: 'red'}} />
//       </View>
//       {/*<TouchableHighlight*/}
//       {/*  onClick={() => {*/}
//       {/*    alert('1');*/}
//       {/*    props.onDelete();*/}
//       {/*  }}*/}
//       {/*  style={{marginTop: 15}}*/}
//       {/*/>*/}
//       {/*  */}
//       {/*</TouchableHighlight>*/}
//       <TouchableHighlight
//         style={{marginTop: -10}}
//         onPress={() => {
//           console.log('Button click');
//           props.onDelete();
//         }}>
//         <Text></Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// function ToDoItem(props: { onDelete: *, description: * }) {
//   return null;
// }

/*const ToDoList = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [texts, setTexts] = React.useState([]);

  const deletee = id => {
    // 1 setText
    setTexts(texts.filter((_, i) => i !== id));
    console.log(id);
  };

  return (
    <View>
      <View>
        {/!*<Text>Hello ToDoList</Text>*!/}
        {/!*<ToDoItem description={'Fid the cat'} />*!/}
        {/!*<ToDoItem description={'Fid myself'} />*!/}
        {/!*<ToDoItem description={'Hard work...'} />*!/}
        {texts.map((text, i) => (
          <ToDoItem description={text} onDelete={deletee.bind(this, i)} />
        ))}
      </View>
      <TouchableHighlight
        onPress={() => {
          setTexts(texts.concat(text));
        }}>
        <Text
          style={{
            height: 30,
            backgroundColor: 'cornflowerblue',
            textAlign: 'center',
          }}>
          Button
        </Text>
      </TouchableHighlight>
      <TextInput
        style={{marginTop: 20, marginBottom: 40, backgroundColor: 'burlywood'}}
        multiline={true}
        onChangeText={onChangeText}
      />
    </View>
  );
};*/

// const styles_to_do = StyleSheet.create({
//   u_item: {
//     flex: 1,
//     flexDirection: 'row',
//     // alignContent: 'stretch',
//     // flexShrink: 1,
//     // justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#7CA1B4',
//     marginTop: 20,
//     backgroundColor: 'blue',
//   },
//   container: {
//     backgroundColor: '#7CA1B4',
//     flex: 1,
//     alignItems: 'center', // ignore this - we'll come back to it
//     justifyContent: 'center', // ignore this - we'll come back to it
//     flexDirection: 'column',
//   },
//   square: {
//     backgroundColor: '#7cb48f',
//     width: 100,
//     height: 100,
//     margin: 4,
//   },
// });

// <ul>
//   <li>One</li>
//   <li>Two</li>
//   <li>Three</li>
// </ul>

// <input />
// <button ClickOnMe />

// PAGESSS

// Pages
// Page 1
// function ToDoScreen() {
//   return (
//     <View>
//       <Text>To-Do List page</Text>
//
//       <ToDoList />
//
//       {/* <TextInput
//         style={{marginTop: 20, marginBottom: 40, backgroundColor: 'burlywood'}}
//         multiline={true}
//       />*/}
//     </View>
//   );
// }

// Page 2
// function NotesScreen() {
//   return (
//     <View>
//       <Text>Notes Page</Text>
//
//       <Note />
//       <Note />
//     </View>
//   );
// }

// Page 3
// function MotivationalScreen() {
//   let [quote, setQuote] = React.useState('');
//   let [source, setSource] = React.useState('');
//
//   const fetchApiCall = () => {
//     fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-host': 'quotes15.p.rapidapi.com',
//         'x-rapidapi-key': '3434f4eab0mshbd6b6ba4ea777aep19d57ejsnadde1bbd7df6',
//       },
//     })
//       .then(response => response.json())
//       .then(response => {
//         setQuote(response.content);
//         setSource(response.originator.name);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
//   return (
//     <TouchableHighlight onPress={fetchApiCall}>
//       <View>
//         <TouchableHighlight onPress={fetchApiCall}>
//           <View
//             style={{
//               padding: 10,
//               marginVertical: 15,
//               backgroundColor: '#0645AD',
//             }}>
//             <Text style={{color: '#fff'}}>Use Fetch API</Text>
//           </View>
//         </TouchableHighlight>
//         <View>
//           <Text>{quote}</Text>
//           <Text>{source}</Text>
//         </View>
//         <StatusBar style="auto" />
//       </View>
//     </TouchableHighlight>
//   );
// }
// const Drawer = createDrawerNavigator();

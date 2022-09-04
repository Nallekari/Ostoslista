import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Button } from 'react-native';

export default function App() {


  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText('');
  }
  const buttonClear = () => {
    setData([]);
    setText('');
  }

  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setText(text)} 
        value={text}
        />
      <View style={{flex:0.1}}/>
      <View style={{ flexDirection:"row"}}>
        <Button onPress={buttonPressed} title="ADD" />
        <Button onPress={buttonClear} title="CLEAR" />
      </View>
        <View style={{flex:0.1}}/>
        <Text style={styles.wordBold}>Shopping List</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        extraData={data}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 40
  },
  wordBold: {
    fontWeight: 'bold',
    color: 'blue'
 }
});

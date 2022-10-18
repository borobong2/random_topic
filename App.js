import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomButton from './src/components/CustomButton';

const App = () => {
  let [text, setText] = useState(0);
  const changeText = () => {
    setText(getRandom(0, 10));
  };
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <View style={{flex: 1}}>
      <CustomButton onPress={changeText} />
      <Text style={{backgroundColor: 'red'}}>{text}</Text>
    </View>
  );
};

export default App;

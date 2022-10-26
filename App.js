import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomText from './src/components/CustomText';
import {data} from './data';
const App = () => {
  let [text, setText] = useState(0);
  const changeText = () => {
    console.log('work', text, data[`topic${text}`]);
    setText(getRandom(1, 10));
  };

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}>
        <CustomButton onPress={changeText} />
        <CustomText>{data[`topic${text}`]}</CustomText>
      </View>
    </View>
  );
};

export default App;

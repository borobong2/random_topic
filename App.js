import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomButton from './src/components/CustomButton';

const App = () => {
  let [text, setText] = useState(0);
  const changeText = () => {
    setText(getRandom(1, 10));
  };
  const data = {
    topic1: '안녕',
    topic2: '안녕2',
    topic3: '안녕3',
    topic4: '안녕4',
    topic5: '안녕5',
    topic6: '안녕6',
    topic7: '안녕7',
    topic8: '안녕8',
    topic9: '안녕9',
    topic10: '안녕10',
  };
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <View style={{flex: 1}}>
      <CustomButton onPress={changeText} />
      <Text style={{backgroundColor: 'red'}}>{data[`topic${text}`]}</Text>
    </View>
  );
};

export default App;

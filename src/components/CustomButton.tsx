import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';

const CustomButton = (props: any) => {
  const [text, setText] = useState<string>('1');

  const changeText = () => {
    setText('2');
  };
  return (
    <View>
      <Pressable
        style={{height: 100, backgroundColor: 'blue'}}
        onPress={props.onPress}
      />
    </View>
  );
};

export default CustomButton;

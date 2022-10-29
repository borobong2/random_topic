import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CustomButton onPress={changeText} />
        <CustomText>{data[`topic${text}`]}</CustomText>
      </View>
    </View>
  );
};

export default App;

const createStyles = () =>
  StyleSheet.create({
    container: {flex: 1},
    content: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
    },
  });

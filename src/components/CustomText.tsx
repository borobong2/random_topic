import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import ko from '../assets/translation/ko';

const CustomText = (props: any) => {
  const {children} = props;
  // let a = [1, 2, 3]; //10

  // const [c, setC] = React.useState(a); //a => 10 b=> ?
  // let b = c; //10
  // console.log('c=a?', c === b, c === a, '\na=b?', a === b, b);
  function foo(...rest) {
    console.log(rest);
  }
  foo({...{a: 1, b: 2, c: 3}, ...{y: 4, z: 5}});
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default CustomText;

const createStyles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',,
    },
    text: {
      height: 30,
      width: 100,
      textAlign: 'center',,
    },
  });;

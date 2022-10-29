import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';

const CustomButton = (props: any) => {
  const styles = createStyles();
  return (
    <View>
      <Pressable style={styles.btn} onPress={props.onPress} />
    </View>
  );
};

export default CustomButton;

const createStyles = () =>
  StyleSheet.create({
    btn: {height: 30, width: 100, backgroundColor: 'blue'},
  });

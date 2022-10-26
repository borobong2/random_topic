import React from 'react';
import {View, Text} from 'react-native';
// import ko from '../assets/translation/ko';

const CustomText = (props: any) => {
  const {children} = props;
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{height: 100, width: 100, textAlign: 'center'}}>
        {children}
      </Text>
    </View>
  );
};

export default CustomText;

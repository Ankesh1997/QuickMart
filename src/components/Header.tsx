import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const CustomHeader = () => {
  return (
    <View
      style={{
        flex: 0.1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20,
      }}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/back.png')}
          style={{height: 32, width: 32, tintColor: '#1C1B1B'}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: '#21D4B4', fontSize: 14}}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

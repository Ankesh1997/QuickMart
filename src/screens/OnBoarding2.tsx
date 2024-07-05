import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import CustomHeader from '../components/Header';
import CustomButton from '../components/CustomButton';

const OnBoarding2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstbox}>
        <CustomHeader/>
        <View
          style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/onlineshopping.png')}
            style={{
              height: 240,
              width: 240,
            }}
          />
        </View>
      </View>

      <View style={styles.secondbox}>
        <Text
          style={{
            flex: 0.3,
            fontSize: 24,
            color: '#1C1B1B',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Unlock exclusive offers and discounts
        </Text>
        <Text
          style={{
            flex: 0.3,
            fontSize: 14,
            color: '#6F7384',
            textAlign: 'center',
          }}>
          Get access to limited-time deals and special promotions available only
          to our valued customers.
        </Text>
        <CustomButton/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  firstbox: {
    flex: 0.6,
    backgroundColor: '#F4FDFA',
    margin: 10,
    borderRadius: 32,
  },
  secondbox: {
    flex: 0.4,
    margin: 10,
  },
});

export default OnBoarding2;

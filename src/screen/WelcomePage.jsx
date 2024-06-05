import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import React from 'react';
import { View, Text, Image } from 'react-native';

const WelcomePage = () => {
  const navigation = useNavigation()
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Image source={require('../../assets/img/homescreen/welcome-img.jpg')} style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
      }} />
      <View style={{ width: '90%', marginTop: 250 }}>
        <Button style={{ marginVertical: 10 }} onPress={() => navigation.navigate('Login')}>LOGIN</Button>
        <Button style={{ marginVertical: 10 }} onPress={() => navigation.navigate('Register')}>REGISTER</Button>
      </View>
    </View>
  );
};

export default WelcomePage;

import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Page</Text>
      <Button title="Go Back Home (Push)" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back Home (Replace)" onPress={() => navigation.replace('Home')} />
    </View>
  );
};

export default AboutPage;

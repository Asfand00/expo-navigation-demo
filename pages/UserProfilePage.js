import React from 'react';
import { View, Text } from 'react-native';

const UserProfilePage = ({ route }) => {
  const { id } = route.params; // Retrieve the dynamic parameter passed from navigation

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Profile Page</Text>
      <Text>User ID: {id}</Text>
    </View>
  );
};

export default UserProfilePage;

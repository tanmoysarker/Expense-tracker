import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity} from 'react-native';

import Home from '../screens/Home';
import Expenses from '../screens/Expenses';
import Icon from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();

export default ({navigation}) => {
  const dispatch = useDispatch();

  const options = {
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Icon name="menu" size={30} color="#900" style={{margin: 8}}/>
      </TouchableOpacity>
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name="HomeScreen" component={Home} />
      <Stack.Screen options={options} name="ExpenseScreen" component={Expenses} />
    </Stack.Navigator>
  );
};

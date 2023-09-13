/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DayQuoteStackTabIcon from 'Q/assets/images/icons/DayQuoteStackTabIcon.svg';
import DayQuoteStackTabIconFocused from 'Q/assets/images/icons/DayQuoteStackTabIconFocused.svg';
import QuotesStackTabIcon from 'Q/assets/images/icons/QuotesStackTabIcon.svg';
import QuotesStackTabIconFocused from 'Q/assets/images/icons/QuotesStackTabIconFocused.svg';
import DayQuoteScreen from 'Q/screens/DayQuoteScreen/DayQuoteScreen';
import styles from './styles';
import QuotesStackNavigator from './QuotesStackNavigator/QuotesStackNavigator';

const AppNavigator = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator screenOptions={styles.container}>
      <Tabs.Screen
        component={QuotesStackNavigator}
        name="QuotesStack"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabBarIconContainer,
                focused && styles.tabBarIconContainerFocused,
              ]}
            >
              {focused ? <QuotesStackTabIconFocused /> : <QuotesStackTabIcon />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        component={DayQuoteScreen}
        name="DayQuoteScreen"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabBarIconContainer,
                focused && styles.tabBarIconContainerFocused,
              ]}
            >
              {focused ? (
                <DayQuoteStackTabIconFocused />
              ) : (
                <DayQuoteStackTabIcon />
              )}
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigator;

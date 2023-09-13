/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from 'Q/helpers/RootNavigation';
import AllQuotesScreen from 'Q/screens/AllQuotesScreen/AllQuotesScreen';
import QuoteScreen from 'Q/screens/QuoteScreen/QuoteScreen';
import BackButtonIcon from 'Q/assets/images/icons/BackButtonIcon.svg';
import colors from 'Q/assets/Colors';
import styles from './styles';

const QuotesStack = createNativeStackNavigator();

const QuotesStackNavigator = () => (
  <QuotesStack.Navigator>
    <QuotesStack.Screen
      component={AllQuotesScreen}
      name="AllQuotesScreen"
      options={{
        headerShown: false,
      }}
    />
    <QuotesStack.Screen
      component={QuoteScreen}
      name="QuoteScreen"
      options={{
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: colors.portage,
        },
        headerTintColor: colors.rhino,
        title: null,
        headerLeft: () => (
          <View style={styles.headerLeftContainer}>
            <TouchableOpacity onPress={() => navigationRef.goBack()}>
              <BackButtonIcon />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Edit quote</Text>
          </View>
        ),
      }}
    />
  </QuotesStack.Navigator>
);

export default QuotesStackNavigator;

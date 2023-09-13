/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'Q/helpers/RootNavigation';
import { quoteClient } from 'Q/services/quote';
// import * as Network from 'expo-network';
import AppNavigator from './AppNavigator/AppNavigator';

const RootNavigator = () => {
  const httpInterceptor = useCallback(() => {
    quoteClient.interceptors.request.use(
      async (config) => {
        config.headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        };

        // const ip = await Network.getIpAddressAsync();

        // console.log(ip);

        const ip = '192.168.1.2';

        config.baseURL = `http://${ip}:3001/`;

        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
  }, []);

  useEffect(() => {
    httpInterceptor();
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;

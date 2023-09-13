/* eslint-disable react/style-prop-object */
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { getRandomQuoteRequest } from 'Q/services/quote';
import RocketIcon from 'Q/assets/images/icons/RocketIcon.svg';
import colors from 'Q/assets/Colors';
import styles from './styles';
import Quote from './Quote/Quote';

const DayQuoteScreen = () => {
  const day = new Date();
  const hours = day.getHours();
  const minutes = day.getMinutes();
  const seconds = day.getSeconds();

  const secsUntilEndOfDate =
    24 * 60 * 60 - hours * 60 * 60 - minutes * 60 - seconds;

  const ms = secsUntilEndOfDate * 1000;

  const getRandomQuote = useQuery({
    queryKey: ['randomQuote'],
    queryFn: () => getRandomQuoteRequest(),
    refetchInterval: ms,
    onSuccess: () => {
      // console.log('Response:', data);
    },
    onError: () => {
      // console.log('Error:', error);
    },
  });

  if (getRandomQuote.isInitialLoading) {
    return (
      <SafeAreaView
        edges={['top', 'right', 'left']}
        style={styles.safeAreaViewContainer}
      >
        <LinearGradient
          colors={[colors.codGray, colors.rhino]}
          end={[0, 1.6]}
          start={[0, 0]}
          style={styles.loadingContainer}
        >
          <ActivityIndicator size="large" color={colors.chantilly} />
        </LinearGradient>
        <StatusBar style="light" />
      </SafeAreaView>
    );
  }

  if (getRandomQuote.isError) {
    return (
      <SafeAreaView
        edges={['top', 'right', 'left']}
        style={styles.safeAreaViewContainer}
      >
        <LinearGradient
          colors={[colors.codGray, colors.rhino]}
          end={[0, 1.6]}
          start={[0, 0]}
          style={styles.errorContainer}
        >
          <RocketIcon />
          <Text style={styles.errorText}>Huston we have a problem!</Text>
          <Text style={styles.errorText}>Something went wrong...</Text>
        </LinearGradient>
        <StatusBar style="light" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      edges={['top', 'right', 'left']}
      style={styles.safeAreaViewContainer}
    >
      <LinearGradient
        colors={[colors.codGray, colors.rhino]}
        end={[0, 1.6]}
        start={[0, 0]}
        style={styles.gradientContainer}
      >
        <View style={styles.titlesContainer}>
          <Text style={styles.title}>Quote of the day</Text>
          <Text style={styles.subtitle}>
            Every day a brand new quote will be available to be inspired of
          </Text>
        </View>
        <Quote getRandomQuote={getRandomQuote} />
      </LinearGradient>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default DayQuoteScreen;

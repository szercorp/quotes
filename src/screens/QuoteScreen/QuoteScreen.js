/* eslint-disable indent */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-unstable-nested-components */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {
  deleteQuoteRequest,
  getSingleQuoteRequest,
  updateQuoteRequest,
} from 'Q/services/quote';
import RocketIcon from 'Q/assets/images/icons/RocketIcon.svg';
import colors from 'Q/assets/Colors';
import HeaderRight from './HeaderRight/HeaderRight';
import TextInputs from './TextInputs/TextInputs';
import styles from './styles';

const QuoteScreen = ({ navigation, route }) => {
  const queryClient = useQueryClient();

  const { quote, numberOfQuotes } = route.params;

  const [author, setAuthor] = useState('');
  const [quoteText, setQuoteText] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const disabledButton = author.trim() === '' || quoteText.trim() === '';

  const getSingleQuote = useQuery({
    queryKey: ['quote', quote.id],
    queryFn: () => getSingleQuoteRequest(quote.id),

    onSuccess: (data) => {
      //   console.log('Response:', data);
      setAuthor(data.author);
      setQuoteText(data.text);
    },
    onError: () => {
      // console.log('Error:', error);
    },
  });

  const { isLoading: isLoadingEditQuote, mutate: editQuote } = useMutation({
    mutationFn: () =>
      updateQuoteRequest(
        {
          author,
          text: quoteText,
        },
        quote.id,
      ),
    onSuccess: () => {
      //   console.log('Response:', data);
      queryClient.invalidateQueries('quotes');
      setAuthor('');
      setQuoteText('');
    },
    onError: () => {
      // console.log('Error:', error);
    },
  });

  const { isLoading: isLoadingDeleteQuote, mutate: deleteQuote } = useMutation({
    mutationFn: () => deleteQuoteRequest(quote.id),
    onSuccess: () => {
      // console.log('Response:', data);
      navigation.goBack();
    },
    onError: () => {
      // console.log('Error :', error);
    },
  });

  const editQuoteValidity =
    getSingleQuote.data?.text !== quoteText.trim() ||
    getSingleQuote.data?.author !== author.trim();

  const editAlert = useCallback(() => {
    Alert.alert(
      'Edit quote',
      'To edit the quote change Author name or quote text',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
    );
  }, []);

  const deleteAlert = useCallback(() => {
    Alert.alert(
      'Delete quote',
      `Are you sure you want to delete quote: ${quote.text} from the author: ${quote.author}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: deleteQuote },
      ],
    );
  }, [deleteQuote, quote.author, quote.text]);

  const next = (ref) => {
    if (ref) {
      ref.current.focus();
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          deleteAlert={deleteAlert}
          deleteQuote={deleteQuote}
          disabledButton={disabledButton}
          editAlert={editAlert}
          editQuote={editQuote}
          editQuoteValidity={editQuoteValidity}
          numberOfQuotes={numberOfQuotes}
        />
      ),
    });
  }, [
    deleteAlert,
    deleteQuote,
    disabledButton,
    editAlert,
    editQuote,
    editQuoteValidity,
    navigation,
    numberOfQuotes,
    quote.text,
  ]);

  if (getSingleQuote.isError) {
    return (
      <LinearGradient
        colors={[colors.portage, colors.chantilly]}
        end={[0, 1.6]}
        start={[0, 0]}
        style={styles.errorContainer}
      >
        <RocketIcon />
        <Text style={styles.errorText}>Huston we have a problem!</Text>
        <Text style={styles.errorText}>Something went wrong...</Text>
        <StatusBar style="light" />
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={[colors.portage, colors.chantilly]}
      end={[0, 1.6]}
      start={[0, 0]}
      style={styles.gradientContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingViewContainer}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollViewContentContainer,
            isKeyboardVisible && styles.scrollViewContentContainerWithKeyboard,
          ]}
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewContainer}
        >
          <View style={styles.container}>
            <TextInputs
              author={author}
              quoteText={quoteText}
              isLoadingDeleteQuote={isLoadingDeleteQuote}
              isLoadingEditQuote={isLoadingEditQuote}
              getSingleQuote={getSingleQuote}
              next={next}
              setAuthor={setAuthor}
              setQuoteText={setQuoteText}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default QuoteScreen;

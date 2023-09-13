/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { createQuoteRequest } from 'Q/services/quote';
import { StatusBar } from 'expo-status-bar';
import TickIcon from 'Q/assets/images/icons/TickIcon.svg';
import colors from 'Q/assets/Colors';
import styles from './styles';
import Header from './Header/Header';
import TextInputs from './TextInputs/TextInputs';

const CreateQuoteModal = ({ modalVisible, setModalVisible }) => {
  const queryClient = useQueryClient();

  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const closeModal = () => setModalVisible(!modalVisible);

  const disabledButton = author.trim() === '' || quote.trim() === '';

  const { mutate: createQuote } = useMutation({
    mutationFn: () =>
      createQuoteRequest({
        author,
        text: quote,
      }),
    onSuccess: () => {
      // console.log('Response:', data);
      queryClient.invalidateQueries('quotes');
      setAuthor('');
      setQuote('');
      closeModal();
    },
    onError: () => {
      // console.log('Error:', error);
    },
  });

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

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <SafeAreaProvider>
        <SafeAreaView
          edges={['top', 'right', 'left']}
          style={styles.safeAreaViewContainer}
        >
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
              <Header closeModal={closeModal} />
              <ScrollView
                contentContainerStyle={[
                  styles.scrollViewContentContainer,
                  isKeyboardVisible &&
                    styles.scrollViewContentContainerWithKeyboard,
                ]}
                showsVerticalScrollIndicator={false}
                style={styles.scrollViewContainer}
              >
                <Text style={styles.title}>Create a new quote</Text>
                <TextInputs
                  author={author}
                  quote={quote}
                  setAuthor={setAuthor}
                  setQuote={setQuote}
                />
                <TouchableOpacity
                  disabled={disabledButton}
                  onPress={createQuote}
                  style={[
                    styles.addQuoteButton,
                    disabledButton && styles.disabled,
                  ]}
                >
                  <Text style={styles.addQuoteButtonText}>Add quote</Text>
                  <TickIcon />
                </TouchableOpacity>
              </ScrollView>
            </KeyboardAvoidingView>
          </LinearGradient>
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="light" backgroundColor={colors.portage} />
    </Modal>
  );
};

CreateQuoteModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};

export default CreateQuoteModal;

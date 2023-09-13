import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

const TextInputs = ({ author, quote, setAuthor, setQuote }) => {
  const quoteRef = useRef();

  const next = (ref) => {
    if (ref) {
      ref.current.focus();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Author</Text>
        <TextInput
          onSubmitEditing={() => next(quoteRef)}
          placeholder="Add the name of an author"
          placeholderTextColor="rgba(240, 253, 250, 0.5)"
          returnKeyType="next"
          style={styles.input}
          value={author}
          onChangeText={(text) => setAuthor(text)}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Quote</Text>
        <TextInput
          ref={quoteRef}
          placeholder="Add a quote"
          placeholderTextColor="rgba(240, 253, 250, 0.5)"
          multiline
          style={[styles.input, styles.multiline]}
          value={quote}
          onChangeText={(text) => setQuote(text)}
        />
      </View>
    </View>
  );
};

TextInputs.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  setAuthor: PropTypes.func.isRequired,
  setQuote: PropTypes.func.isRequired,
};

export default TextInputs;

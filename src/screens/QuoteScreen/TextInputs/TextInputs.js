/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View } from 'react-native';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { wp } from 'Q/helpers/scaling';
import styles from './styles';

const TextInputs = ({
  author,
  quoteText,
  isLoadingDeleteQuote,
  isLoadingEditQuote,
  getSingleQuote,
  setAuthor,
  setQuoteText,
}) => (
  <View style={styles.container}>
    <View style={[styles.fieldContainer, styles.quoteContainer]}>
      <Text style={styles.label}>Quote</Text>
      {getSingleQuote.isInitialLoading ||
      isLoadingEditQuote ||
      isLoadingDeleteQuote ? (
        <MotiView
          transition={{
            type: 'timing',
          }}
        >
          <Skeleton
            colorMode="light"
            radius={8}
            width="100%"
            height={wp(200)}
          />
        </MotiView>
      ) : (
        <TextInput
          placeholder="Add a quote"
          placeholderTextColor="rgba(240, 253, 250, 0.5)"
          multiline
          returnKeyType="next"
          style={styles.multilineInput}
          value={quoteText}
          onChangeText={(text) => setQuoteText(text)}
        />
      )}
    </View>
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>Author</Text>
      <View style={styles.authorTextInputContainer}>
        <Text style={styles.dashes}>-- </Text>
        {getSingleQuote.isInitialLoading ||
        isLoadingEditQuote ||
        isLoadingDeleteQuote ? (
          <MotiView
            transition={{
              type: 'timing',
            }}
          >
            <Skeleton
              colorMode="light"
              radius={8}
              width={wp(280)}
              height={wp(44)}
            />
          </MotiView>
        ) : (
          <TextInput
            placeholder="Add the name of an author"
            placeholderTextColor="rgba(240, 253, 250, 0.5)"
            style={styles.input}
            value={author}
            onChangeText={(text) => setAuthor(text)}
          />
        )}
      </View>
    </View>
  </View>
);

TextInputs.propTypes = {
  author: PropTypes.string.isRequired,
  quoteText: PropTypes.string.isRequired,
  isLoadingDeleteQuote: PropTypes.bool.isRequired,
  isLoadingEditQuote: PropTypes.bool.isRequired,
  getSingleQuote: PropTypes.shape({
    isInitialLoading: PropTypes.bool,
  }).isRequired,
  setAuthor: PropTypes.func.isRequired,
  setQuoteText: PropTypes.func.isRequired,
};

export default TextInputs;

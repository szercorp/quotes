import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from 'Q/assets/Colors';
import styles from './styles';

const Quote = ({ getRandomQuote }) => (
  <LinearGradient
    colors={[colors.portage, colors.chantilly]}
    end={[0, 1.6]}
    start={[0, 0]}
    style={styles.gradientContainer}
  >
    <View style={styles.quoteInnerContainer}>
      <Text numberOfLines={4} ellipsizeMode="tail" style={styles.quoteText}>
        {`"${getRandomQuote.data?.text}"`}
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.authorName}>
        {`-- ${getRandomQuote.data?.author}`}
      </Text>
    </View>
  </LinearGradient>
);

Quote.propTypes = {
  getRandomQuote: PropTypes.shape({
    data: PropTypes.shape({
      author: PropTypes.string,
      text: PropTypes.string,
    }),
  }).isRequired,
};

export default Quote;

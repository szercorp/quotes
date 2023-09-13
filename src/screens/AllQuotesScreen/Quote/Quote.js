import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from 'Q/assets/Colors';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { wp } from 'Q/helpers/scaling';
import styles from './styles';

const Quote = ({ getAllQuotes, item, navigation, numberOfQuotes }) => {
  if (getAllQuotes.isInitialLoading) {
    return (
      <MotiView
        transition={{
          type: 'timing',
        }}
        style={styles.motiViewContainer}
      >
        <Skeleton colorMode="light" radius={14} width={373} height={wp(500)} />
      </MotiView>
    );
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('QuoteScreen', { quote: item, numberOfQuotes })
      }
    >
      <LinearGradient
        colors={[colors.portage, colors.chantilly]}
        end={[0, 1.6]}
        start={[0, 0]}
        style={styles.gradientContainer}
      >
        <View style={styles.innerContainer}>
          <Text numberOfLines={4} ellipsizeMode="tail" style={styles.quoteText}>
            {`"${item.text}"`}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.authorName}
          >
            {`-- ${item.author}`}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Quote.propTypes = {
  getAllQuotes: PropTypes.shape({
    isInitialLoading: PropTypes.bool,
  }).isRequired,
  item: PropTypes.shape({
    author: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  numberOfQuotes: PropTypes.number.isRequired,
};

export default Quote;

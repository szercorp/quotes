import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Pagination = ({ defaultPage, getAllQuotes }) => (
  <View style={styles.paginationContainer}>
    {getAllQuotes?.data?.map((el, index) => (
      <View
        key={el.id}
        style={[
          styles.paginationBullet,
          index === defaultPage && styles.paginationCurrentBullet,
        ]}
      />
    ))}
  </View>
);

Pagination.propTypes = {
  defaultPage: PropTypes.number.isRequired,
  getAllQuotes: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Pagination;

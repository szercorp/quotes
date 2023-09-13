import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import PenIcon from 'Q/assets/images/icons/PenIcon.svg';
import TrashIcon from 'Q/assets/images/icons/TrashIcon.svg';
import styles from './styles';

const HeaderRight = ({
  deleteAlert,
  disabledButton,
  editAlert,
  editQuote,
  editQuoteValidity,
  numberOfQuotes,
}) => (
  <View
    style={[
      styles.headerRightContainer,
      numberOfQuotes === 1 && styles.headerRightContainerOneQuote,
    ]}
  >
    <TouchableOpacity
      style={disabledButton && styles.disabled}
      disabled={disabledButton}
      onPress={editQuoteValidity ? editQuote : editAlert}
    >
      <PenIcon />
    </TouchableOpacity>
    {numberOfQuotes > 1 && (
      <TouchableOpacity onPress={deleteAlert}>
        <TrashIcon />
      </TouchableOpacity>
    )}
  </View>
);

HeaderRight.propTypes = {
  deleteAlert: PropTypes.func.isRequired,
  disabledButton: PropTypes.bool.isRequired,
  editAlert: PropTypes.func.isRequired,
  editQuote: PropTypes.func.isRequired,
  editQuoteValidity: PropTypes.bool.isRequired,
  numberOfQuotes: PropTypes.number.isRequired,
};

export default HeaderRight;

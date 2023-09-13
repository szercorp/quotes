import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import CloseIcon from 'Q/assets/images/icons/CloseIcon.svg';
import styles from './styles';

const Header = ({ closeModal }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={closeModal} style={styles.closeIconContainer}>
      <CloseIcon />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Header;

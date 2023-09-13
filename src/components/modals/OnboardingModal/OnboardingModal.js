import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { onboardUser } from 'Q/features/onboarding/onboardingSlice';
import RightDownAngleArrowIcon from 'Q/assets/images/icons/RightDownAngleArrowIcon.svg';
import styles from './styles';

const OnboardingModal = ({
  isOnboardingModalVisible,
  setIsOnboardingModalVisible,
}) => {
  const dispatch = useDispatch();

  const handleOnboarding = () => {
    dispatch(onboardUser(true));
    setIsOnboardingModalVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isOnboardingModalVisible}
      onRequestClose={() => setIsOnboardingModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.onboardingText1}>
          In this screen you can see all of your quotes
        </Text>
        <Text style={styles.onboardingText2}>
          Clicking this card you can access the edit quote screen
        </Text>
        <View style={styles.arrow1}>
          <RightDownAngleArrowIcon />
        </View>
        <Text style={styles.onboardingText3}>
          Clicking the second navigation button you can access the quote of the
          day screen
        </Text>
        <View style={styles.arrow2}>
          <RightDownAngleArrowIcon />
        </View>
        <TouchableOpacity onPress={handleOnboarding} style={styles.button}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

OnboardingModal.propTypes = {
  isOnboardingModalVisible: PropTypes.bool.isRequired,
  setIsOnboardingModalVisible: PropTypes.func.isRequired,
};

export default OnboardingModal;

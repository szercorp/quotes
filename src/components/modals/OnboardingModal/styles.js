import { Platform, StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  onboardingText1: {
    color: colors.white,
    position: 'absolute',
    top: Platform.OS === 'ios' ? wp(120) : wp(65),
    fontFamily: 'proximaNovaSemiBold',
    fontSize: wp(16),
  },
  onboardingText2: {
    width: wp(220),
    textAlign: 'center',
    color: colors.white,
    position: 'absolute',
    top: Platform.OS === 'ios' ? wp(420) : wp(370),
    fontFamily: 'proximaNovaSemiBold',
    fontSize: wp(16),
  },
  arrow1: {
    position: 'absolute',
    right: Platform.OS === 'ios' ? wp(50) : wp(50),
    bottom: Platform.OS === 'ios' ? wp(350) : wp(355),
  },
  onboardingText3: {
    width: wp(220),
    textAlign: 'center',
    color: colors.white,
    position: 'absolute',
    top: Platform.OS === 'ios' ? wp(660) : wp(615),
    right: wp(140),
    fontFamily: 'proximaNovaSemiBold',
    fontSize: wp(16),
  },
  arrow2: { position: 'absolute', right: wp(120), bottom: wp(80) },
  buttonText: {
    fontSize: wp(18),
    fontFamily: 'proximaNovaBold',
    color: colors.white,
  },
  button: {
    height: wp(44),
    justifyContent: 'center',
    paddingHorizontal: wp(10),
    borderRadius: 50,
    backgroundColor: colors.portage,
    position: 'absolute',
    right: wp(30),
    bottom: wp(40),
  },
});

export default styles;

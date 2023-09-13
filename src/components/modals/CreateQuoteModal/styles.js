import { Platform, StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: colors.portage,
  },
  gradientContainer: {
    flex: 1,
  },
  keyboardAvoidingViewContainer: {
    flex: 1,
  },
  scrollViewContentContainer: {
    justifyContent: 'space-between',
  },
  scrollViewContentContainerWithKeyboard: {
    paddingBottom: Platform.OS === 'ios' ? wp(80) : wp(20),
  },
  scrollViewContainer: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: wp(20),
    fontFamily: 'proximaNovaSemiBold',
    marginTop: wp(35),
    alignSelf: 'center',
  },
  addQuoteButton: {
    width: wp(343),
    height: wp(44),
    marginTop: wp(50),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.portage,
    alignSelf: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  addQuoteButtonText: {
    fontSize: wp(16),
    fontFamily: 'proximaNovaSemiBold',
    color: colors.white,
  },
});

export default styles;

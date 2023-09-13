import { Platform, StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  keyboardAvoidingViewContainer: {
    flex: 1,
    paddingHorizontal: wp(16),
  },
  scrollViewContentContainer: {
    justifyContent: 'space-between',
  },
  scrollViewContentContainerWithKeyboard: {
    paddingBottom: Platform.OS === 'ios' ? wp(110) : wp(195),
  },
  scrollViewContainer: {
    flex: 1,
    paddingTop: wp(10),
  },
  container: {
    flex: 1,
    height: wp(600),
    width: '100%',
    borderWidth: wp(3),
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: colors.whiteIce,
    justifyContent: 'space-between',
  },
  errorContainer: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: colors.whiteIce,
    fontSize: wp(18),
    fontFamily: 'proximaNovaSemiBold',
    marginTop: wp(30),
  },
});

export default styles;

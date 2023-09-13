import { StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: colors.codGray,
  },
  keyboardAvoidingViewContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  gradientContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(12),
  },
  scrollViewContentContainer: {
    justifyContent: 'space-between',
    paddingBottom: wp(24),
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: colors.pink,
    paddingHorizontal: wp(24),
  },
  titlesContainer: {
    alignItems: 'center',
    marginTop: wp(30),
  },
  title: {
    fontSize: wp(30),
    fontFamily: 'proximaNovaSemiBold',
    color: colors.white,
  },
  subtitle: {
    fontSize: wp(18),
    fontFamily: 'proximaNova',
    color: colors.white,
    marginVertical: wp(30),
    textAlign: 'center',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
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

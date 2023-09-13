import { StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldContainer: {
    width: '100%',
    marginTop: wp(30),
    paddingHorizontal: wp(16),
    marginBottom: wp(40),
  },
  quoteContainer: {
    marginTop: wp(150),
  },
  label: {
    color: colors.whiteIce,
    fontSize: wp(20),
    fontFamily: 'proximaNovaSemiBold',
    marginBottom: wp(8),
    textAlign: 'center',
  },
  authorTextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashes: {
    color: colors.whiteIce,
    fontSize: wp(24),
  },
  multilineInput: {
    height: wp(200),
    paddingTop: wp(12),
    paddingHorizontal: wp(10),
    borderWidth: wp(2),
    borderRadius: 8,
    borderColor: 'rgba(151, 149, 239, 1)',
    backgroundColor: 'rgba(249, 197, 209, 0.5)',
    fontSize: wp(18),
    fontFamily: 'proximaNovaSemiBold',
    color: colors.whiteIce,
  },
  input: {
    flex: 1,
    height: wp(44),
    borderWidth: wp(2),
    borderColor: 'rgba(151, 149, 239, 0.9)',
    backgroundColor: 'rgba(249, 197, 209, 0.5)',
    borderRadius: 8,
    paddingHorizontal: wp(10),
    fontSize: wp(18),
    fontFamily: 'proximaNovaSemiBold',
    color: colors.whiteIce,
  },
});

export default styles;

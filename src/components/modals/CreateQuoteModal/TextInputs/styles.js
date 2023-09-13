import { StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  fieldContainer: {
    width: '100%',
    marginTop: wp(30),
    paddingHorizontal: wp(16),
  },
  label: {
    color: colors.white,
    fontSize: wp(18),
    fontFamily: 'proximaNovaSemiBold',
  },
  input: {
    height: wp(44),
    borderRadius: 8,
    borderWidth: wp(2),
    borderColor: 'rgba(151, 149, 239, 0.9)',
    backgroundColor: 'rgba(249, 197, 209, 0.5)',
    paddingHorizontal: wp(10),
    marginTop: wp(8),
    fontSize: wp(18),
    fontFamily: 'proximaNovaSemiBold',
    color: colors.whiteIce,
  },
  multiline: {
    height: wp(200),
    paddingTop: wp(12),
  },
});

export default styles;

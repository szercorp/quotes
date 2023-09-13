import { StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  gradientContainer: {
    width: '90%',
    height: wp(450),
    borderRadius: 14,
    backgroundColor: colors.whiteIce,
    padding: wp(12),
  },
  quoteInnerContainer: {
    flex: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: wp(3),
    borderColor: colors.whiteIce,
    padding: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  quoteText: {
    fontSize: wp(26),
    fontFamily: 'proximaNova',
    color: colors.whiteIce,
    textAlign: 'center',
  },
  authorName: {
    fontSize: wp(20),
    fontFamily: 'proximaNovaBold',
    color: colors.whiteIce,
    marginBottom: wp(20),
    position: 'absolute',
    bottom: wp(5),
  },
});

export default styles;

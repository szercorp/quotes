import { StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  motiViewContainer: {
    position: 'absolute',
    top: wp(-50),
    alignItems: 'center',
    marginLeft: wp(10),
  },
  gradientContainer: {
    width: '95%',
    height: wp(500),
    alignSelf: 'center',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp(12),
    position: 'absolute',
    top: wp(-50),
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: colors.whiteIce,
    padding: wp(12),
  },
  quoteText: {
    fontSize: wp(30),
    fontFamily: 'proximaNova',
    color: colors.whiteIce,
    textAlign: 'center',
    marginTop: wp(200),
  },
  authorName: {
    fontSize: wp(24),
    fontFamily: 'proximaNovaSemiBold',
    color: colors.whiteIce,
    marginBottom: wp(20),
    width: wp(300),
    textAlign: 'center',
    paddingHorizontal: wp(12),
  },
});

export default styles;

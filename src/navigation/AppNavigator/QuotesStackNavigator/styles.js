import { StyleSheet } from 'react-native';
import colors from 'Q/assets/Colors';
import { wp } from 'Q/helpers/scaling';

const styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    position: 'absolute',
    right: wp(-192),
    fontSize: wp(18),
    fontFamily: 'proximaNovaSemiBold',
    color: colors.rhino,
  },
});

export default styles;

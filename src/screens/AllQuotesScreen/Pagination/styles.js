import { StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: colors.codGray,
  },
  gradientContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: wp(30),
    fontFamily: 'proximaNovaSemiBold',
    color: colors.white,
    marginTop: wp(30),
  },
  carouselContainer: {
    height: '53%',
    marginTop: wp(30),
  },
  paginationContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: wp(20),
  },
  paginationBullet: {
    width: wp(13),
    height: wp(13),
    backgroundColor: 'rgba(18, 16, 14, 0.4)',
    marginHorizontal: wp(8),
    borderRadius: 50,
  },
  paginationCurrentBullet: {
    borderWidth: wp(2),
    borderColor: colors.chantilly,
    backgroundColor: colors.portage,
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: wp(140),
    backgroundColor: 'rgba(18, 16, 14, 0.4)',
    borderRadius: 50,
  },
  plusIconContainerNoQuotes: {
    bottom: wp(205),
  },
  loadingContainer: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

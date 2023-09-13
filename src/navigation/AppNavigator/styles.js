import { Platform, StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';
import colors from 'Q/assets/Colors';

const styles = StyleSheet.create({
  container: {
    tabBarStyle: [
      {
        height: wp(85),
        marginHorizontal: wp(100),
        borderRadius: wp(50),
        backgroundColor: 'rgba(18, 16, 14, 0.4)',
        position: 'absolute',
        bottom: wp(20),
        borderTopWidth: 0,
      },
    ],
  },
  tabBarIconContainer: {
    backgroundColor: 'rgba(43, 65, 98, 0.3)',
    paddingVertical: wp(5),
    paddingHorizontal: wp(5),
    marginTop: Platform.OS === 'ios' && wp(28),
    borderRadius: 50,
  },
  tabBarIconContainerFocused: {
    backgroundColor: colors.chantilly,
    borderWidth: wp(3),
    borderColor: colors.portage,
  },
});

export default styles;

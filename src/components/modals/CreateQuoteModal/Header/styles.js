import { Platform, StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'android' && wp(15),
  },
  closeIconContainer: {
    width: wp(40),
    height: wp(40),
    backgroundColor: 'rgba(43, 65, 98, 0.3)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(12),
  },
});

export default styles;

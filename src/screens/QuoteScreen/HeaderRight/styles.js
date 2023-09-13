import { StyleSheet } from 'react-native';
import { wp } from 'Q/helpers/scaling';

const styles = StyleSheet.create({
  headerRightContainer: {
    width: wp(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerRightContainerOneQuote: {
    justifyContent: 'flex-end',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;

import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

const wp = (dimension) => wp2dp(`${(dimension / 375) * 100}%`);
const hp = (dimension) => hp2dp(`${(dimension / 812) * 100}%`);

export { wp, hp };

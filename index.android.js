/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';
import { Checkbox } from 'react-native-material-design';

import DatePickerExample from './app/components/datepicker/datepicker-android';
import ViewPagerAndroidExample from './app/components/slider/slider-android';

class calendar extends Component {
  render() {

    return (
      <DatePickerExample>
      </DatePickerExample>
    );
  }
}

AppRegistry.registerComponent('calendar', () => calendar);

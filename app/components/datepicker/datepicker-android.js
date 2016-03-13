'use strict';

import React, {
  DatePickerAndroid,
  StyleSheet,
  Text,
  View,
  Component,
  TouchableWithoutFeedback,
} from 'react-native';

class DatePickerExample extends Component {
  render () {
    return (
      <View>
        <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this)}>
            <Text> Demo datepicker </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  async showPicker () {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
}

module.exports = DatePickerExample;

import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

class Screen1 extends PureComponent {

  render() {
    return (
      <View flex center style={styles.container}>
        <Text>Screen1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});

export default Screen1;

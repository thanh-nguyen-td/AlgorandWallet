/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { LognIn } from '@screens'


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <LognIn />
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

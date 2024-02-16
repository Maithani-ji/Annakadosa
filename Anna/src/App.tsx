/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Nav from './nav/Nav';
import LoginProvider from './utils/LoginproviderContext';

function App() {
  return (
    <>
      <LoginProvider>
        <Nav />
      </LoginProvider>

      <SafeAreaView />
      {/* <StatusBar backgroundColor={'#fed920'} hidden /> */}
    </>
  );
}

const styles = StyleSheet.create({});

export default App;

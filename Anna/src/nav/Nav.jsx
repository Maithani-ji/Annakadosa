import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './AuthNav';
import Mainnav from './MainnavTab';
import {clearAsyncStorage, getData} from '../utils/AsyncStorag';
import Main from './Main';
import {useLogin} from '../utils/LoginproviderContext';

const Nav = () => {
  const {isLoggedin, setIsLoggedin} = useLogin();

  useEffect(() => {
    const fetchData = async () => {
      const id = await getData('id');
      if (id) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    };

    fetchData();
  }, [setIsLoggedin]);
  return (
    <NavigationContainer>
      {isLoggedin ? <Main /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default Nav;

const styles = StyleSheet.create({});

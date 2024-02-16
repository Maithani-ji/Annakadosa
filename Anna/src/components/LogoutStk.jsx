import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {clearAsyncStorage} from '../utils/AsyncStorag';
import {useLogin} from '../utils/LoginproviderContext';

const Logout = ({navigation}) => {
  const {setIsLoggedin} = useLogin();
  const handlelogout = async () => {
    await clearAsyncStorage();
    //navigation.replace('Introduction');
    setIsLoggedin(false);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{backgroundColor: '#fed920', padding: 9, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/iconsassets/left-arrow.png')}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            fontSize: 22,
            //sfontWeight: 'bold',
            color: 'black',
            marginLeft: 20,
            textAlignVertical: 'center',
          }}>
          Logout
        </Text>
      </View>
      <View
        style={{margin: 20, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity>
          <Image
            source={require('../assets/iconsassets/logout.gif')}
            style={{height: 400, width: 400}}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              marginTop: -20,
              flexDirection: 'column',
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              //marginLeft: 20,
              textAlign: 'center',
            }}>
            Log Out
          </Text>
          <Text
            style={{
              flexDirection: 'column',
              fontSize: 15,
              //ontWeight: 'bold',
              //color: 'black',
              //marginLeft: 40,
              marginTop: 15,
              textAlign: 'center',
            }}>
            Are you Sure you want to Log out?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 20,
              marginVertical: 70,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Main')}
              style={{
                paddingHorizontal: 40,
                paddingVertical: 20,
                borderRadius: 20,
                //borderWidth: 1,
                backgroundColor: 'green',
              }}>
              <Text style={{color: 'white'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlelogout()}
              style={{
                paddingHorizontal: 40,
                paddingVertical: 20,
                borderRadius: 20,
                // borderWidth: 1,

                backgroundColor: 'red',
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Logout;

const styles = StyleSheet.create({});

import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import Loading from '../../loadingcomponent/loading';
import {getData, storeData} from '../../utils/AsyncStorag';
import {useLogin} from '../../utils/LoginproviderContext';

const SignIn = ({navigation}) => {
  const [number, setnumber] = useState('');
  const [load, setload] = useState(false);
  const {setIsLoggedin} = useLogin();
  const handleSignIn = async () => {
    setload(true);

    try {
      if (number.length === 10) {
        const body = {
          phone: number,
          device_id: 'regdf4rt544g4hguyfytg220011',
          platform: 'App',
        };
        const response = await axios.post(
          'https://techiedom.com/annakadosa/api/user/loggedin',
          body,
        );

        console.log('API response id:', response.data.data.id);
        await storeData('uid', response.data.data.id);
        navigation.replace('Verify', {data: response.data.data});
        setload(false);
      } else {
        setload(false);
        Alert.alert('Please enter a valid 10-digit phone number');
      }
    } catch (error) {
      setload(false);
      Alert.alert('Something wrong with the server');
      console.error('API error:', error);
    }
  };
  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/introscreenassets/background.jpeg')}
        style={{width: '100%', height: '100%'}}>
        {/* <StatusBar backgroundColor={'#ffd10d'} /> */}
        <View
          style={{
            //flex: 1,
            marginHorizontal: 20,
          }}>
          <Image
            source={require('../../assets/iconsassets/Annac.png')}
            style={{
              height: '70%',
              width: '60%',
              alignSelf: 'center',
              marginTop: -50,
            }}
            resizeMode="contain"
          />
          {/* </View> */}
          <View style={{marginTop: -90}}>
            <Text
              style={{
                marginBottom: 20,
                fontSize: 25,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
              }}>
              Sign in to your account
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 17,
                //fontWeight: 'bold',
                color: 'black',
                marginBottom: 20,
              }}>
              We'll send you a verification code to help us keep your account
              safe
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 5,
                overflow: 'hidden',
                //width: '100%',
                //justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginLeft: 10,
                  textAlignVertical: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                +91
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  marginLeft: 10,
                  marginBottom: -1,
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: 'black',
                }}
                onChangeText={setnumber}
                value={number}
                placeholder="Enter Phone Number"
                keyboardType="number-pad"
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSignIn}
            style={{
              backgroundColor: 'green',
              padding: 20,
              alignSelf: 'center',
              borderRadius: 40,
              marginTop: 40,
            }}>
            <Text style={{color: 'yellow', fontWeight: 'bold'}}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});

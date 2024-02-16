import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from '../loadingcomponent/loading';
import {useFocusEffect} from '@react-navigation/native';
import {getData, storeData} from '../utils/AsyncStorag';

const Address = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      // Call fetchData function when the screen is focused
      fetchData();
    }, []), // Empty dependency array to run only when the screen is focused
  );

  const fetchData = async () => {
    setload(true);
    const id = await getData('id');
    try {
      const requestBody = {
        user_id: id,
      };

      const response = await axios.post(
        'https://techiedom.com/annakadosa/api/user/address/',
        requestBody,
      );

      console.log('address', response.data.data);

      // Check if response data array is empty
      if (response.data.data.length === 0) {
        Alert.alert('Please add your address!!');
        //console.error('API error:', response.data.message);
        setload(false);
        return; // Exit the function if the array is empty
      }

      // Update state with the fetched data
      setAddresses(response.data.data);
      setload(false);
    } catch (error) {
      console.error('API error:', error);
      setload(false);
    }
  };
  const [addresses, setAddresses] = useState([]);
  const [load, setload] = useState(false);
  if (!load) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: '#fed920',
            padding: 9,
            flexDirection: 'row',
          }}>
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
            Manage Address
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            margin: 20,
          }}>
          {addresses?.map(address => (
            <TouchableOpacity
              key={address.id}
              onPress={async () => {
                await storeData('address', address?.address);
                Alert.alert('Success', 'Address selected Successfully!!');
              }}
              style={{
                padding: 15,
                borderWidth: 0.8,
                borderColor: 'lightgray',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={require('../assets/iconsassets/location.png')}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: 'gray',
                      //marginLeft: ,
                    }}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 16, marginLeft: 20}}>
                    {address?.type}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Addaddress', {
                      editable: true,
                      editaddress: address,
                    })
                  }>
                  <Image
                    source={require('../assets/iconsassets/edit.png')}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: 'gray',
                      //marginLeft: ,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{fontSize: 17, color: 'black', marginVertical: 10}}>
                  {address.address}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            onPress={() => navigation.navigate('Addaddress', {editable: false})}
            style={{
              backgroundColor: 'green',
              padding: 20,
              alignSelf: 'center',
              borderRadius: 40,
              marginTop: 250,
            }}>
            <Text style={{color: 'yellow', fontWeight: 'bold'}}>
              Add Address
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Loading />;
  }
};

export default Address;

const styles = StyleSheet.create({});

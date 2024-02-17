import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';
import {getData} from '../utils/AsyncStorag';
import {useFocusEffect} from '@react-navigation/native';
import Loading from '../loadingcomponent/loading';

const Securecheckout = ({navigation, route}) => {
  const [select, setselect] = useState(false);
  const {details} = route.params;
  const [defaultaddress, setdefaultaddress] = useState('');
  const [load, setLoad] = useState(false);
  console.log('details', details);

  useFocusEffect(
    React.useCallback(() => {
      fetchaddress();
    }, []),
  );
  const fetchaddress = async () => {
    const defaultadd = await getData('address');
    setdefaultaddress(defaultadd);
  };
  const onPressPayment = async () => {
    setLoad(true);
    try {
      const id = await getData('id');
      const response2 = await axios.post(
        'https://techiedom.com/annakadosa/api/order/create',
        details,
      );
      console.log('Response 2:', response2.data);

      const response1 = await axios.post(
        'https://techiedom.com/annakadosa/api/destroy/cart/',
        {user_id: id},
      );
      console.log('Response 1:', response1.data);
      // Handle the responses or perform additional actions as needed
      navigation.replace('Paymentcomplete', {details: details});
    } catch (error) {
      console.error('Error:', error);
      // Handle errors appropriately
    } finally {
      setLoad(false);
    }
  };
  if (load) {
    return <Loading />;
  }
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
            //  flex: 1,
            fontSize: 22,
            //sfontWeight: 'bold',
            color: 'black',
            marginLeft: 20,
            textAlignVertical: 'center',
          }}>
          Secure Checkout
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{margin: 20}}>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 0.8,
            marginBottom: 10,
          }}>
          <View View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={require('../assets/iconsassets/location.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'gray',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  //  flex: 1,
                  fontSize: 17,
                  //sfontWeight: 'bold',
                  color: 'gray',
                  marginLeft: 20,
                  //textAlignVertical: 'center',
                }}>
                Location
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Address')}>
              <Text
                style={{
                  //  flex: 1,
                  fontSize: 16,
                  //sfontWeight: 'bold',
                  color: 'red',
                  marginLeft: 20,
                  textAlignVertical: 'center',
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                //  flex: 1,
                fontSize: 17,
                //sfontWeight: 'bold',
                color: 'black',

                //textAlignVertical: 'center',
              }}>
              {defaultaddress != null ? defaultaddress : 'Select your Address'}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 0.8,
            marginBottom: 10,
          }}>
          <View View style={{flexDirection: 'row', marginVertical: 10}}>
            <View>
              <Image
                source={require('../assets/iconsassets/odering-time.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'gray',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  //  flex: 1,
                  fontSize: 17,
                  //sfontWeight: 'bold',
                  color: 'gray',
                  marginLeft: 20,
                  //textAlignVertical: 'center',
                }}>
                Ordering for:ASAP
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Text
                style={{
                  //  flex: 1,
                  fontSize: 16,
                  //sfontWeight: 'bold',
                  color: 'red',
                  marginLeft: 20,
                  textAlignVertical: 'center',
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 0.8,
            marginBottom: 10,
          }}>
          <View View style={{flexDirection: 'row', marginVertical: 10}}>
            <View>
              <Image
                source={require('../assets/iconsassets/gift-card.png')}
                style={{
                  width: 25,
                  height: 25,
                  // tintColor: 'gray',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  //  flex: 1,
                  fontSize: 17,
                  //sfontWeight: 'bold',
                  color: 'gray',
                  marginLeft: 20,
                  //textAlignVertical: 'center',
                }}>
                Add Gift Card
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addgiftcard')}>
              <Text
                style={{
                  //  flex: 1,
                  fontSize: 16,
                  //sfontWeight: 'bold',
                  color: 'red',
                  marginLeft: 20,
                  textAlignVertical: 'center',
                }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 0.8,
            marginBottom: 10,
          }}>
          <View View style={{flexDirection: 'row', marginVertical: 10}}>
            <View>
              <Image
                source={require('../assets/iconsassets/payment.png')}
                style={{
                  width: 25,
                  height: 25,
                  // tintColor: 'gray',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  //  flex: 1,
                  fontSize: 17,
                  //sfontWeight: 'bold',
                  color: 'gray',
                  marginLeft: 20,
                  //textAlignVertical: 'center',
                }}>
                Payment Via :COD
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Paymentmethod', {details: details})
              }>
              <Text
                style={{
                  //  flex: 1,
                  fontSize: 16,
                  //sfontWeight: 'bold',
                  color: 'red',
                  marginLeft: 20,
                  textAlignVertical: 'center',
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <BouncyCheckbox
            size={20}
            fillColor="green"
            unfillColor="#FFFFFF"
            //text="Custom Checkbox"
            iconStyle={{borderColor: 'green', borderRadius: 5}}
            innerIconStyle={{borderWidth: 2, borderRadius: 5}}
            textStyle={{fontFamily: 'JosefinSans-Regular'}}
            onPress={isChecked => {
              setselect(!select);
            }}
          />
          <Text
            style={{
              fontSize: 16,
              //fontWeight: 'bold',
              //color: 'black',
            }}>
            I agree to recieve promotional service.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          //flex: 1,
          elevation: 10,
          position: 'absolute',
          bottom: 0,
          padding: 10,
          backgroundColor: 'white',
          //height: '10%',
          width: '100%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
          }}>
          <View>
            <View style={{}}>
              <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
                ₹{details?.total}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{flexDirection: 'row', marginVertical: 10}}>
              <View>
                <Text
                  style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                  View details
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {select ? (
            <TouchableOpacity
              onPress={onPressPayment}
              style={{
                flex: 1,
                // marginVertical: 30,
                // alignSelf: 'center',
                backgroundColor: 'green',
                borderRadius: 40,
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  color: 'yellow',
                  textAlign: 'center',
                }}>
                Pay Securely
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Securecheckout;

const styles = StyleSheet.create({});

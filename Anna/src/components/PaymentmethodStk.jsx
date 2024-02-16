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

const Paymentmethod = ({navigation, route}) => {
  const [select, setselect] = useState(false);
  const {details} = route.params;
  useEffect(() => {
    if (select) {
      details.payment_method = 'cash on delivery';
      console.log(details);
    } else {
      details.payment_method = '';
      console.log(details);
    }
  }, [select]);
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
          Select Payment Method
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{margin: 0}}>
        <View
          style={{
            borderBottomWidth: 0.8,
            borderColor: 'lightgray',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 23,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Select Payment Mode
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <BouncyCheckbox
            size={20}
            fillColor={select ? 'red' : 'green'}
            unfillColor="#FFFFFF"
            //text="Custom Checkbox"
            iconStyle={{borderColor: select ? 'red' : 'green', borderRadius: 5}}
            innerIconStyle={{borderWidth: 2, borderRadius: 5}}
            textStyle={{fontFamily: 'JosefinSans-Regular'}}
            onPress={isChecked => setselect(!select)}
          />
          <View
            style={{
              flex: 1,
              marginVertical: 20,
              //marginTop: 20,
              borderRadius: 20,
              borderWidth: 0.3,
              borderColor: 'gray',
              padding: 15,
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('Logout')}
              style={{
                //flex: 1,
                borderBottomColor: 'lightgray',
                //borderBottomWidth: 0.5,
                // marginVertical: 5,
                // paddingBottom: 10,
              }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 18,

                  color: 'black',
                  marginLeft: 14,
                  textAlignVertical: 'center',
                }}>
                Cash on Delivery
              </Text>
            </TouchableOpacity>
          </View>
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
                ₹{details.amount}
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
              onPress={() => {
                console.log('details', details);
                navigation.navigate('Securecheckout', {details: details});
              }}
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
                Make Payment
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Paymentmethod;

const styles = StyleSheet.create({});

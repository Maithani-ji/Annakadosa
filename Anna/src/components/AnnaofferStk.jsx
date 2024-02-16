import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Annaoffer = ({navigation}) => {
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
          Anna Ka Dosa Offer
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={{margin: 20}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
            }}>
            Enter Your coupan code here
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                flex: 1,
                fontSize: 18,
                borderBottomWidth: 1,
                borderColor: 'lightgray',
              }}
              placeholder="eg. LP1234"
            />
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                alignSelf: 'center',
                paddingHorizontal: 16,
                paddingVertical: 13,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: 'lightgray', padding: 10}}>
          <Text
            style={{
              fontSize: 23,
              color: 'black',
              //fontWeight: 'bold',
            }}>
            Available Coupons
          </Text>
        </View>
        <View style={{margin: 20}}>
          <View
            style={{
              marginBottom: 20,
              borderBottomWidth: 0.8,
              borderColor: 'lightgray',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                  LP2050
                </Text>
              </View>
              <TouchableOpacity style={{alignSelf: 'center'}}>
                <Text style={{fontSize: 17, color: 'red'}}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 17, color: 'black'}}>
                Get your 2nd Pizza at 50% off
              </Text>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 15, color: 'gray'}}>
                Valid only on Regular,Medium and Large Pizza.
              </Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 20,
              borderBottomWidth: 0.8,
              borderColor: 'lightgray',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                  LPD503
                </Text>
              </View>
              <TouchableOpacity style={{alignSelf: 'center'}}>
                <Text style={{fontSize: 17, color: 'red'}}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 17, color: 'black'}}>
                Get Flat Discount of ₹15 on Minimum Billing of ₹250
              </Text>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 15, color: 'gray'}}>
                Cannot be clubbed with any other offers.Not valid on Classic
                maniacs pizza.Beverages amd combos.
              </Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 20,
              borderBottomWidth: 0.8,
              borderColor: 'lightgray',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                  LPD100
                </Text>
              </View>
              <TouchableOpacity style={{alignSelf: 'center'}}>
                <Text style={{fontSize: 17, color: 'red'}}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 17, color: 'black'}}>
                Get Flat Discount of ₹50 on Minimum Billing of ₹500
              </Text>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 15, color: 'gray'}}>
                Not valid on Classic maniacs pizza ,Beverages and Combos.
              </Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 20,
              borderBottomWidth: 0.8,
              borderColor: 'lightgray',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                  LPD305
                </Text>
              </View>
              <TouchableOpacity style={{alignSelf: 'center'}}>
                <Text style={{fontSize: 17, color: 'red'}}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 17, color: 'black'}}>
                Buy 1 Get 1 free on your second order
              </Text>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 15, color: 'gray'}}>
                Valid only on Regular,Medium and Large Pizza
              </Text>
            </View>
          </View>
          <View style={{}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                  LPD1F0
                </Text>
              </View>
              <TouchableOpacity style={{alignSelf: 'center'}}>
                <Text style={{fontSize: 17, color: 'red'}}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 17, color: 'black'}}>
                Get Upto 40% Discount On Your First Five Order
              </Text>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 15, color: 'gray'}}>
                Valid only on Regular,Medium and Large for chinese and
                continental foods
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Annaoffer;

const styles = StyleSheet.create({});

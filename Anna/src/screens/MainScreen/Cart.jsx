import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Loading from '../../loadingcomponent/loading';
import axios from 'axios';
import CartItem from '../../categoriescomponent/Cartitems';
import {getData} from '../../utils/AsyncStorag';
import {useFocusEffect} from '@react-navigation/native';

const Cart = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [cartData, setCartData] = useState();
  const [uid, setuid] = useState();
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  const fetchData = async () => {
    setempty(false);
    const id = await getData('id');
    setuid(id);
    try {
      setLoad(true);
      const apiUrl = 'https://techiedom.com/annakadosa/api/cart/';

      const response = await axios.post(apiUrl, id);
      console.log('cart response', response.data);
      if (response.data.data.length === 0) {
        setLoad(false);
        setempty(true); // Handle the case where data is not present or there's an error
      }

      setLoad(false);

      setCartData(response.data.data.cart);
    } catch (error) {
      setLoad(false);
      //Alert.alert('Error', 'Failed in getting the cart details.');
      setempty(true);
      console.error('Error fetching data:', error);
    }
  };
  const updateQuantity = async (product_id, qty) => {
    try {
      const id = await getData('id');
      const apiUrl = 'https://techiedom.com/annakadosa/api/update/cart/';

      const body = {
        user_id: id,
        product_id: product_id,
        qty: qty,
      };

      const response = await axios.post(apiUrl, body);
      //console.log(body);

      Alert.alert('Success', 'Successfully cart updated');
      console.log('Quantity updated successfully!', response.data);
      fetchData();
    } catch (error) {
      Alert.alert('Failed', 'Failed to update the cart.');
      console.error('Error updating quantity:', error);
    }
  };

  const CartData = cartData?.map(item => ({
    product_id: item.product_id,
    qty: item.qty.toString(), // Assuming qty needs to be a string
    size: 'standard', // Assuming size is constant, change it accordingly
  }));
  console.log('transformedcart:', CartData);
  const subtotalAmount = cartData?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.qty;
  }, 0);
  const totalAmount = subtotalAmount - 4.25 - 100;
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('');
  const [show, setshow] = useState(false);
  const [timetext, settimetext] = useState('');
  const [empty, setempty] = useState(false);

  const onchange = (event, selectedDate) => {
    setshow(false);
    const currentDate = selectedDate || date;
    //setshow(Platform.OS === 'android'); // Temporarily keep visible on Android
    setdate(currentDate);
    const tempDate = new Date(currentDate);

    const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    settimetext(ftime);
  };

  const showMode = currentMode => {
    setshow(!show);
    setmode(currentMode);
  };

  if (load) {
    return <Loading color={'white'} />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{backgroundColor: '#fed920', padding: 9, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/iconsassets/left-arrow.png')}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
        {empty ? (
          <Text
            style={{
              flex: 1,
              fontSize: 22,
              //sfontWeight: 'bold',
              color: 'black',
              marginLeft: 20,
              textAlignVertical: 'center',
            }}>
            Empty Cart
          </Text>
        ) : (
          <Text
            style={{
              flex: 1,
              fontSize: 22,
              //sfontWeight: 'bold',
              color: 'black',
              marginLeft: 20,
              textAlignVertical: 'center',
            }}>
            Cart
          </Text>
        )}
      </View>
      {empty ? (
        <View
          style={{margin: 20, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/iconsassets/empty-cart.gif')}
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
              Good Food is Always Cooking
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
              Your Cart is Empty .Add something from the menu.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Menu')}
              style={{
                backgroundColor: 'green',
                padding: 20,
                alignSelf: 'center',
                borderRadius: 40,
                marginTop: 20,
              }}>
              <Text style={{color: 'yellow', fontWeight: 'bold'}}>
                Explore Menu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={{margin: 20}}>
          {show && (
            <DateTimePicker
              testID="datetimepicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onchange}
            />
          )}
          <View style={{borderBottomWidth: 0.8, borderColor: 'lightgray'}}>
            <Text
              style={{
                fontSize: 23,
                color: 'black',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Order List
            </Text>
          </View>
          {
            //cartData &&
            cartData?.map((cartItem, index) => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                updateQuantity={updateQuantity}
                // other props...
              />
            ))
          }

          <View
            style={{
              marginVertical: 10,

              borderRadius: 20,
              borderWidth: 0.3,
              borderColor: 'gray',
              padding: 8,
            }}>
            <TouchableOpacity
              //  onPress={() => navigation.navigate('Addgiftcard')}
              style={{
                flexDirection: 'row',
                borderBottomColor: 'lightgray',
                //borderBottomWidth: 0.5,
                // marginVertical: 5,
                // paddingBottom: 10,
              }}>
              <TouchableOpacity
              // onPress={() => navigation.navigate('Addgiftcard')}
              >
                <Image
                  source={require('../../assets/iconsassets/instruc.png')}
                  style={{
                    width: 30,
                    height: 30,
                    marginTop: 10,
                    marginLeft: 8,
                  }}
                />
              </TouchableOpacity>

              <TextInput
                placeholder="Write instruction for Anna ka dosa"
                style={{
                  // flex: 1,
                  fontSize: 15,

                  color: 'black',
                  marginLeft: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              //    marginVertical: 10,

              borderRadius: 20,
              borderWidth: 0.3,
              borderColor: 'gray',
              padding: 15,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Annaoffer')}
              style={{
                flexDirection: 'row',
                borderBottomColor: 'lightgray',
                //borderBottomWidth: 0.5,
                // marginVertical: 5,
                // paddingBottom: 10,
              }}>
              <TouchableOpacity
              //onPress={() => navigation.navigate('Rateus')}
              >
                <Image
                  source={require('../../assets/iconsassets/offer.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'red',
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  fontSize: 18,

                  color: 'black',
                  marginLeft: 14,
                  textAlignVertical: 'center',
                }}>
                Apply Anna Dosa Offer
              </Text>
              <TouchableOpacity
                style={{borderRadius: 40, overflow: 'hidden'}}
                onPress={() => navigation.navigate('Annaoffer')}>
                <Image
                  source={require('../../assets/iconsassets/arrowr.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: 'red',
                    marginTop: 7,
                  }}
                  //  resizeMode="cover"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 10,

              borderRadius: 20,
              borderWidth: 0.3,
              borderColor: 'gray',
              padding: 15,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addgiftcard')}
              style={{
                flexDirection: 'row',
                borderBottomColor: 'lightgray',
                //borderBottomWidth: 0.5,
                // marginVertical: 5,
                // paddingBottom: 10,
              }}>
              <TouchableOpacity
              //onPress={() => navigation.navigate('Rateus')}
              >
                <Image
                  source={require('../../assets/iconsassets/gift-card.png')}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  fontSize: 18,

                  color: 'black',
                  marginLeft: 14,
                  textAlignVertical: 'center',
                }}>
                Add Gift Card
              </Text>
              <TouchableOpacity
                style={{borderRadius: 40, overflow: 'hidden'}}
                //  onPress={() => navigation.navigate('Rateus')}
              >
                <Image
                  source={require('../../assets/iconsassets/arrowr.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: 'red',
                    marginTop: 7,
                  }}
                  //  resizeMode="cover"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View
            style={{
              //    marginVertical: 10,

              borderRadius: 20,
              borderWidth: 0.3,
              borderColor: 'gray',
              padding: 15,
            }}>
            <TouchableOpacity
              onPress={() => showMode('time')}
              style={{
                flexDirection: 'row',
                borderBottomColor: 'lightgray',
                //borderBottomWidth: 0.5,
                // marginVertical: 5,
                // paddingBottom: 10,
              }}>
              <TouchableOpacity
              //onPress={() => navigation.navigate('Rateus')}
              >
                <Image
                  source={require('../../assets/iconsassets/odering-time.png')}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  fontSize: 18,

                  color: 'black',
                  marginLeft: 14,
                  textAlignVertical: 'center',
                }}>
                Ordering Time: {timetext}
              </Text>
              <TouchableOpacity
                style={{borderRadius: 40, overflow: 'hidden'}}
                onPress={() => showMode('time')}>
                <Image
                  source={require('../../assets/iconsassets/arrowr.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: 'red',
                    marginTop: 7,
                  }}
                  //  resizeMode="cover"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth: 0.8, borderColor: 'lightgray'}}>
            <Text
              style={{
                fontSize: 23,
                color: 'black',
                fontWeight: 'bold',
                marginBottom: 10,
                marginTop: 30,
              }}>
              Bill Details
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 19,
                  color: 'gray',

                  marginBottom: 10,
                }}>
                Subtotal
              </Text>

              <Text
                style={{
                  fontSize: 19,
                  color: 'black',

                  marginBottom: 10,
                }}>
                ₹{subtotalAmount}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 19,
                  color: 'gray',

                  marginBottom: 10,
                }}>
                Delivery charge
              </Text>

              <Text
                style={{
                  fontSize: 19,
                  color: 'black',

                  marginBottom: 10,
                }}>
                0
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 19,
                  color: 'gray',

                  marginBottom: 10,
                }}>
                Discount
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  color: 'green',

                  marginBottom: 10,
                }}>
                ₹100
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 19,
                  color: 'gray',

                  marginBottom: 10,
                }}>
                GST
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  color: 'black',

                  marginBottom: 20,
                }}>
                ₹4.25
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 19,
                color: 'black',

                marginBottom: 10,
              }}>
              Total
            </Text>
            <Text
              style={{
                fontSize: 19,
                color: 'black',

                marginBottom: 10,
              }}>
              ₹{totalAmount}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Paymentmethod', {
                details: {
                  cart: CartData,
                  delivery_charge: 0,
                  user_id: uid,
                  coupon: 100,
                  payment_method: '',
                  amount: totalAmount,
                  total: totalAmount,
                  optional_item_price: '150',
                },
              })
            }
            style={{
              marginVertical: 30,
              alignSelf: 'center',
              backgroundColor: 'green',
              borderRadius: 40,
              padding: 25,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'yellow',
              }}>
              Proceed To Checkout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});

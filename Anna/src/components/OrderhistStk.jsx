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
import Loading from '../loadingcomponent/loading';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import {getData} from '../utils/AsyncStorag';
import Snackbar from 'react-native-snackbar';

const Orderhistory = ({navigation}) => {
  const [historyData, setHistoryData] = useState();
  const [load, setLoad] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      fetchhistory();
    }, []),
  );
  const fetchhistory = async () => {
    try {
      const id = await getData('id');
      setLoad(true);
      const body = {user_id: id};
      const response = await axios.post(
        'https://techiedom.com/annakadosa/api/order/status',
        body,
      );

      if (response?.data?.data[0]?.length === 0) {
        setLoad(false);
        Snackbar.show({
          text: 'No Orders,Please order something !!',
          duration: Snackbar.LENGTH_INDEFINITE,
          textColor: 'white',
          backgroundColor: 'gray',
          marginBottom: 70,
          action: {
            text: 'Press',
            textColor: 'black',
            onPress: () => {
              navigation.replace('Main');
            },
          },
        });

        return;
      }

      setHistoryData(response.data.data);
    } catch (error) {
      console.error('Error fetching order history:', error);
      Snackbar.show({
        text: 'Failed to fetch order history!! ',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70, // Adjust this value to position the Snackbar at the desired distance from the top
      });
    } finally {
      setLoad(false);
    }
  };
  // useEffect(() => {
  //   fetchhistory();
  // }, []);
  const handlecancelbtn = async order_id => {
    try {
      setLoad(true);
      const id = await getData('id');
      const body = {user_id: id, order_id: order_id};
      const response = await axios.post(
        'https://techiedom.com/annakadosa/api/order/declined/',
        body,
      );
      if (response.data.status_code === '200') {
        Snackbar.show({
          text: 'Product Cancelled Successfully!! ',
          textColor: 'white',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70, // Adjust this value to position the Snackbar at the desired distance from the top
        });
      }
    } catch (error) {
      console.error('Error fetching order history:', error);
      Snackbar.show({
        text: 'Failed to fetch orders!! ',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70, // Adjust this value to position the Snackbar at the desired distance from the top
      });
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
            flex: 1,
            fontSize: 22,
            //sfontWeight: 'bold',
            color: 'black',
            marginLeft: 20,
            textAlignVertical: 'center',
          }}>
          Order History
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          margin: 20,
        }}>
        {historyData?.map((item, index) => (
          <View
            key={index}
            style={{
              borderBottomColor: 'lightgray',
              borderBottomWidth: 0.8,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // marginBottom: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  //alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    //sfontWeight: 'bold',
                    color: 'black',
                    // marginLeft: 20,
                    // textAlignVertical: 'center',
                  }}>
                  Order_Id:#{item?.order_id}
                </Text>
              </View>

              {item?.order_status === 1 && (
                <View
                  style={{
                    backgroundColor: 'red',
                    alignSelf: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    Delivered
                  </Text>
                </View>
              )}

              {item?.order_status === 2 && (
                <View
                  style={{
                    backgroundColor: 'green',
                    alignSelf: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    On Way
                  </Text>
                </View>
              )}

              {item?.order_status === 0 && (
                <View
                  style={{
                    backgroundColor: 'lightgray',
                    alignSelf: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    Cancelled
                  </Text>
                </View>
              )}
            </View>
            <Text
              style={{
                fontSize: 17,
                flex: 1,
                //sfontWeight: 'bold',
                color: 'black',
                // marginLeft: 20,
                // textAlignVertical: 'center',
              }}>
              Transaction_Id:#{item?.transection_id}
            </Text>
            <Text
              style={{
                fontSize: 15,
                //sfontWeight: 'bold',
                color: 'black',
                marginLeft: 2,
                // textAlignVertical: 'center',
              }}>
              Payment method:{item?.payment_method}
            </Text>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  //textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Order List
              </Text>

              {item?.order_products?.map((product, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    marginVertical: 5,
                    //width: '80%',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      width: '50%',
                    }}>
                    <Text style={{alignSelf: 'flex-start', textAlign: 'left'}}>
                      {product?.product_name}
                    </Text>
                    <Text style={{alignSelf: 'flex-start', textAlign: 'left'}}>
                      x {product?.qty}
                    </Text>
                  </View>
                  <Text>Price/Unit-₹{product?.unit_price}</Text>
                </View>
              ))}

              <View style={{marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',

                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      //textAlign: 'center',
                      //color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Subtotal
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      //textAlign: 'center',
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    ₹{item?.sub_total}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',

                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      //textAlign: 'center',
                      //color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Delivery-charge
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      //textAlign: 'center',
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    + ₹{item?.delivery_charge}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',

                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      //textAlign: 'center',
                      //color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Coupon-discount
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      //textAlign: 'center',
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    - ₹{item?.coupon_price}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      //textAlign: 'center',
                      //color: 'white',
                      fontWeight: 'bold',
                    }}>
                    GrandTotal
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      //textAlign: 'center',
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    = ₹{item?.grand_total}
                  </Text>
                </View>
                <View style={{marginVertical: 10}}>
                  <Text>
                    Order on:
                    {new Date(item?.order_delivered_date).toLocaleDateString()}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 10,
                  }}>
                  {item?.order_status === 1 && (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Rateorder')}
                      style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor: 'green',
                        backgroundColor: 'green',
                        alignSelf: 'center',
                      }}>
                      <Text style={{textAlign: 'center', color: 'white'}}>
                        Rate order
                      </Text>
                    </TouchableOpacity>
                  )}
                  {item?.order_status === 2 ? (
                    <TouchableOpacity
                      onPress={() => handlecancelbtn(item?.order_id)}
                      style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor: 'red',
                        backgroundColor: 'red',
                        alignSelf: 'center',
                      }}>
                      <Text style={{textAlign: 'center', color: 'white'}}>
                        Cancel order
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orderhistory;

const styles = StyleSheet.create({});

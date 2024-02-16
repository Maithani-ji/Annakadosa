import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Loading from '../loadingcomponent/loading';
import {getData} from '../utils/AsyncStorag';

const ProductItem = ({item, navigation, index, load, setLoad}) => {
  const onAddPress = async productId => {
    setLoad(true);
    const id = getData('id');
    try {
      const apiUrl = 'https://techiedom.com/annakadosa/api/store/cart/'; // Replace with your actual API endpoint
      const userId = id;

      const response = await axios.post(apiUrl, {
        user_id: userId,
        product_id: item.id,
        qty: 1,
      });
      console.log(response);
      // If the request is successful, navigate or perform other actions
      if (response && response.data) {
        setLoad(false);
        navigation.navigate('Productinfo', {item: item});

        // You can navigate or perform any other action here
      } else {
        setLoad(false);
        Alert.alert('Error', 'Error in adding product to cart');
        console.error('Failed to add product to cart.');
      }
    } catch (error) {
      setLoad(false);
      Alert.alert('Error', 'Error in adding product to cart');
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <View style={{marginLeft: index === 0 ? 5 : 20}}>
      <View style={{height: 250, width: 200, alignSelf: 'center'}}>
        <Image
          //source={require('../assets/mainscreenassets/BestSellers/Vada.jpg')}
          source={{uri: item.thumb_image}}
          style={{width: '100%', height: '85%', borderRadius: 10}}
          resizeMode="cover"
        />

        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 5,
            left: 55,
            backgroundColor: '#fed920',
            borderRadius: 40,
            paddingHorizontal: 30,
            paddingVertical: 15,
          }}
          onPress={onAddPress}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Add
          </Text>
        </TouchableOpacity>

        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 10,
            padding: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            ₹{item.price}
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            flexDirection: 'column',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {item.name}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;

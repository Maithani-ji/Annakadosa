import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Loading from '../loadingcomponent/loading';
import axios from 'axios';
import {getData} from '../utils/AsyncStorag';
import Snackbar from 'react-native-snackbar';
const RenderCategoryItem = ({item, navigation}) => {
  const [load, setLoad] = useState(false);
  const onAddPress = async productId => {
    setLoad(true);
    const userId = await getData('id');
    try {
      const apiUrl = 'https://techiedom.com/annakadosa/api/store/cart/'; // Replace with your actual API endpoint
      console.log(item.id);
      const response = await axios.post(apiUrl, {
        user_id: userId,
        product_id: item.id,
        qty: 1,
      });

      console.log(response);
      // If the request is successful, navigate or perform other actions
      if (response && response.data) {
        setLoad(false);
        Snackbar.show({
          text: 'Added to Cart Successfully',
          textColor: 'white',
          backgroundColor: 'green',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70, // Adjust this value to position the Snackbar at the desired distance from the top
        });
        navigation.navigate('Productinfo', {item: item});

        // You can navigate or perform any other action here
      } else {
        setLoad(false);
        Snackbar.show({
          text: 'Failed in adding product to cart ',
          textColor: 'white',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70, // Adjust this value to position the Snackbar at the desired distance from the top
        });
        console.error('Failed to add product to cart.');
      }
    } catch (error) {
      setLoad(false);
      Snackbar.show({
        text: 'Failed in adding product to cart ',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70, // Adjust this value to position the Snackbar at the desired distance from the top
      });
      console.error('Error adding product to cart:', error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.8,
      }}>
      <View>
        <Image
          // source={require('../assets/mainscreenassets/RecommendedItems/idli-dosa.jpg')}
          source={{uri: item.thumb_image}}
          style={{width: 125, height: 125, borderRadius: 10}}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={{
            marginTop: -20,
            alignSelf: 'center',
            backgroundColor: '#fed920',
            borderRadius: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginBottom: 10,
          }}
          disabled={load}
          onPress={onAddPress}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 8, flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 5,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'red',
            marginBottom: 5,
          }}>
          ₹{item.price}
        </Text>
        <Text numberOfLines={3} style={{marginBottom: 20}}>
          {item.short_description}
        </Text>
      </View>
    </View>
  );
};

export default RenderCategoryItem;

const styles = StyleSheet.create({});

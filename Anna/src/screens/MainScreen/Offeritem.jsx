import {
  FlatList,
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
import RenderCategoryItem from '../../categoriescomponent/Rendorcategoryitem';
import Loading from '../../loadingcomponent/loading';

const Offeritem = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetchData();
    fetchBanner();
  }, []);
  const fetchData = async () => {
    setLoad(true);
    try {
      //const apiUrl = 'https://techiedom.com/annakadosa/api/products';

      const response = await axios.get(
        'https://techiedom.com/annakadosa/api/offer/product',
      );
      //console.log(response.data.data);
      setProducts(response.data.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.error('Error fetching data:', error);
      // setError('An error occurred while fetching data.');
    }
  };
  const fetchBanner = async () => {
    setLoad(true);
    try {
      //const apiUrl = 'https://techiedom.com/annakadosa/api/products';

      const response = await axios.post(
        'https://techiedom.com/annakadosa/api/offer/product',
        {category_id: 1},
      );
      console.log(response.data.data[0].thumb_image);
      setBanner(response.data.data[0]);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.error('Error fetching data:', error);
      // setError('An error occurred while fetching data.');
    }
  };
  if (load) {
    return <Loading color={'white'} />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: '#fed920',
          padding: 8,
          flexDirection: 'row',

          // paddingHorizontal: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            source={require('../../assets/iconsassets/menu.png')}
            style={{
              width: 25,
              height: 25,
              marginTop: 5,
            }}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <TouchableOpacity style={{flexDirection: 'row', marginLeft: 5}}>
            <Text> Outlet</Text>
            {/* <Image
              source={require('../../assets/iconsassets/dropdown.png')}
              style={{height: 15, width: 15, marginTop: 3, marginLeft: 3}}
            /> */}
          </TouchableOpacity>
          <Text
            style={{
              //flex: 1,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'green',
              marginLeft: 10,
              textAlignVertical: 'center',
              marginBottom: -6,
            }}>
            Alps Court,Delhi 110045
          </Text>
        </View>
        <TouchableOpacity
          style={{margin: 3, borderRadius: 60, overflow: 'hidden'}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../assets/iconsassets/user-photo.png')}
            style={{
              width: 28,
              height: 28,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
        <View
          style={{borderRadius: 30, overflow: 'hidden', position: 'relative'}}>
          <Image
            source={require('../../assets/iconsassets/home-order-now.gif')}
            //source={{uri: banner?.thumb_image}}
            style={{height: 200, width: '100%'}}
          />
          <View
            style={{
              flex: 1,
              position: 'absolute',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                //flex: 1,
                fontSize: 26,
                fontWeight: 'bold',
                color: 'green',
                //marginLeft: 10,
                textAlign: 'center',
                marginTop: 10,
              }}>
              PIZZA STARTING @49 EACH
            </Text>
            <Text
              style={{
                //flex: 1,
                //fontSize: 27,
                fontWeight: 'bold',
                //color: 'green',
                //marginLeft: 10,
                textAlign: 'center',
                marginTop: 10,
              }}>
              * any 2 regular & medium pizzas
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                borderRadius: 20,
                padding: 10,
                marginTop: 20,
                // position: 'absolute',
                // bottom: 0,
              }}>
              <Text style={{color: 'yellow'}}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              //flex: 1,
              fontSize: 27,
              fontWeight: 'bold',
              color: 'black',
              //marginLeft: 10,
              //textAlign: 'center',
              marginTop: 30,
            }}>
            Offer Items
          </Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <RenderCategoryItem item={item} navigation={navigation} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Offeritem;

const styles = StyleSheet.create({});

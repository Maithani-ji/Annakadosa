import {
  Alert,
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import axios from 'axios';
import Loading from '../../loadingcomponent/loading';
import CategoryItem from '../../categoriescomponent/Category';

// const CategoryItem = ({item, navigation}) => (
//   <TouchableOpacity
//     // onPress={() => navigation.navigate('Dosamenu')}
//     style={{
//       alignSelf: 'center',
//       padding: 5,
//       height: 150,
//       width: 110,
//     }}>
//     <View style={{alignSelf: 'center'}}>
//       <Image
//         source={require('../../assets/mainscreenassets/CategoryImage/category-1.png')}
//         style={{
//           width: 80,
//           height: 80,
//         }}
//       />
//       <View style={{}}>
//         <Text
//           style={{
//             flexDirection: 'column',
//             textAlign: 'center',
//             fontSize: 17,
//             fontWeight: 'bold',
//             color: 'black',
//           }}>
//           {item.name}
//         </Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

const Menu = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(false);
  const [apiImages, setApiImages] = useState([]);
  useEffect(() => {
    fetchImagesFromApi();
    fetchData();
  }, []);
  const fetchImagesFromApi = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        'https://techiedom.com/annakadosa/api/slider/image',
      ); // Replace with your API endpoint
      // console.log('image response', response.data.data);
      setApiImages(response.data.data); // Assuming the API returns an array of image URLs
    } catch (error) {
      console.error('Error fetching images from API:', error);
      Alert.alert('Error', 'Failed to fetch images from the API.');
    } finally {
      setLoad(false);
    }
  };
  const img = apiImages?.map(item => item.image);
  //img && console.log('images', img);
  const fetchData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        'https://techiedom.com/annakadosa/api/categories',
      );
      // console.log(response.data.data);
      setCategories(response.data.data); // Assuming the API response is an array of category objects
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.error('API error:', error);
      //Alert.alert('Error', 'Failed to fetch categories. Please try again.');
      Alert.alert('Error', error.message);
    }
  };

  // const images = [
  //   require('../../assets/mainscreenassets/OfferSlider/slide1.png'),
  //   require('../../assets/mainscreenassets/OfferSlider/slide2.png'),
  //   require('../../assets/mainscreenassets/OfferSlider/slide3.png'),
  // ];
  // const data = [
  //   {
  //     id: '1',
  //     name: 'Dosa',
  //     // image: require('../../assets/mainscreenassets/CategoryImage/category-1.png'),
  //   },
  //   {
  //     id: '2',
  //     name: 'Idli',
  //     // image: require('../../assets/mainscreenassets/CategoryImage/category-3.png'),
  //   },
  //   {
  //     id: '3',
  //     name: 'Vada',
  //     // image: require('../../assets/mainscreenassets/CategoryImage/category-2.png'),
  //   },
  //   {
  //     id: '4',
  //     name: 'Dosa',
  //     // image: require('../../assets/mainscreenassets/CategoryImage/category-1.png'),
  //   },
  //   {
  //     id: '5',
  //     name: 'Idli',
  //     // image: require('../../assets/mainscreenassets/CategoryImage/category-3.png'),
  //   },
  //   {
  //     id: '6',
  //     name: 'Vada',
  //     // image: require('../../assets/mainscreenassets/CategoryImage/category-2.png'),
  //   },
  //   // Add more categories as needed
  // ];

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
      <ScrollView showsVerticalScrollIndicator={false} style={{margin: 20}}>
        <View
          style={{
            flexDirection: 'row',
            //justifyContent: 'space-between',
            borderRadius: 20,
            borderWidth: 0.3,
            borderColor: 'gray',
            padding: 15,
          }}>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Anna Ka Dosa
            </Text>
            <View style={{flexDirection: 'row', gap: 5, marginTop: 10}}>
              <Image
                source={require('../../assets/iconsassets/location.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'gray',
                  marginLeft: -5,
                }}
              />
              <Text
                style={{
                  marginTop: 5,
                  color: 'gray',

                  fontWeight: 'bold',
                }}>
                Alps Court,Dallas
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={{
                  marginVertical: 10,
                  // borderBottomColor: 'red',
                  // borderBottomWidth: 0.5,
                }}>
                <Text
                  style={{
                    color: 'red',
                    //fontWeight: 'bold'
                    textDecorationLine: 'underline',
                  }}>
                  Get Directions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('tel:9999888777')}>
                <Image
                  source={require('../../assets/iconsassets/call.png')}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: 'red',
                    marginRight: 25,
                    marginTop: 5,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image
              source={require('../../assets/iconsassets/review-icon.png')}
              style={{height: 90, width: 90}}
            />
          </View>
        </View>

        <View
          style={{
            // flexDirection: 'row',
            //justifyContent: 'space-between',
            marginTop: 30,
            marginBottom: 10,
          }}>
          <Text
            style={{
              //flex: 1,
              fontSize: 27,
              fontWeight: 'bold',
              color: 'black',
              //marginLeft: 10,
              //textAlign: 'center',
            }}>
            Explore Menu
          </Text>
        </View>

        <View
          style={{
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <FlatList
            scrollEnabled={false}
            data={categories}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CategoryItem item={item} navigation={navigation} />
            )}
          />
        </View>

        <View style={{marginBottom: 20, borderRadius: 20, overflow: 'hidden'}}>
          <SliderBox
            images={img.slice(0, 4)}
            sliderBoxHeight={200}
            dotColor="#00a954"
            autoplay={true}
            imageLoadingColor={'#00a954'}
            autoplayInterval={2000}
            dotStyle={{
              width: 9,
              height: 9,
              borderRadius: 5,
              marginHorizontal: -25,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            //circleLoop={true}
            resizeMode={'cover'}
            // resizeMethod={'resize'}
            ImageComponentStyle={{
              borderRadius: 10,
              width: '100%',
              //marginTop: 5,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({});

import {
  Alert,
  FlatList,
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
import {SliderBox} from 'react-native-image-slider-box';
import CategoryItem from '../../categoriescomponent/Category';
import axios from 'axios';
import Loading from '../../loadingcomponent/loading';
import RenderCategoryItem from '../../categoriescomponent/Rendorcategoryitem';
import ProductItem from '../../categoriescomponent/BestsellerProd';
import {useFocusEffect} from '@react-navigation/native';
const Home = ({navigation}) => {
  const [apiImages, setApiImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState(false);
  const [bestseller, setBestseller] = useState([]);
  const [recomended, setRecommended] = useState([]);
  const [searchtext, setSearchtext] = useState('');
  const [searchdata, setSearchdata] = useState([]);

  useEffect(() => {
    fetchImagesFromApi();
    fetchData();
    fetchBestseller();
    fetchrecommended();
  }, []);
  const fetchImagesFromApi = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        //'https://dummyjson.com/products',
        'https://techiedom.com/annakadosa/api/slider/image',
      ); // Replace with your API endpoint
      //console.log('image response', response);
      setApiImages(response.data.data); // Assuming the API returns an array of image URLs
    } catch (error) {
      // console.error('Error fetching images from API:', error);
      Alert.alert('Error', 'Failed to fetch images from the API.');
    } finally {
      setLoad(false);
    }
  };

  const img = apiImages?.map(item => item.image);

  const fetchData = async () => {
    setLoad(true);
    try {
      // const productsResponse = await axios.get(
      //   'https://techiedom.com/annakadosa/api/products',
      // );
      // setProducts(productsResponse.data.data);
      // console.log(productsResponse.data.data);
      const categoriesResponse = await axios.get(
        'https://techiedom.com/annakadosa/api/categories',
      );
      setCategories(categoriesResponse.data.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      //console.error('API error:', error);
      Alert.alert('Error', 'Failed to fetch data. Please try again.');
    }
  };
  const fetchBestseller = async () => {
    setLoad(true);
    try {
      //  const productsResponse = await axios.get(
      //    'https://techiedom.com/annakadosa/api/products',
      //  );
      //  setBestseller(productsResponse.data.data);
      //  console.log(productsResponse.data.data);
      const bestsellerResponse = await axios.get(
        'https://techiedom.com/annakadosa/api/best/seller',
      );
      // console.log('responsebestseller', bestsellerResponse.data);
      setBestseller(bestsellerResponse.data.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      //console.error(' best seller API error:', error);
      Alert.alert('Error', 'Failed to fetch data. Please try again.');
    }
  };
  const fetchrecommended = async () => {
    setLoad(true);
    try {
      // const productsResponse = await axios.get(
      //   'https://techiedom.com/annakadosa/api/products',
      // );
      // setrecommended(productsResponse.data.data);
      // console.log(productsResponse.data.data);
      const recommendedResponse = await axios.get(
        'https://techiedom.com/annakadosa/api/recommanded/product',
      );
      setRecommended(recommendedResponse.data.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      // console.error(' recommended API error:', error);
      Alert.alert('Error', 'Failed to fetch data. Please try again.');
    }
  };

  const handleSearch = async () => {
    setLoad(true);
    try {
      if (searchtext.trim() == '') {
        setSearch(false);
        return;
      }
      setSearch(true);

      const apiUrl = 'https://techiedom.com/annakadosa/api/search'; // Replace with your API endpoint

      const requestBody = {
        category_id: '',
        search_text: searchtext, // You can replace 'cheese' with the actual search text
      };

      const response = await axios.post(apiUrl, requestBody);

      // Handle the response
      //console.log('API Response:', response.data.data);
      setSearchdata(response.data.data);
      // Further processing based on the response
    } catch (error) {
      console.error('Error making API request:', error);

      // Handle the error
    } finally {
      setLoad(false);
    }
  };
  const handleRemovesearch = () => {
    setSearch(false);
    setSearchtext(null);
    //setSearchdata([]);

    //setLoad(false);
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
              width: 26,
              height: 26,
              marginTop: 7,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            gap: -10,
            marginLeft: 10,
            marginBottom: -10,
          }}>
          <Image
            source={require('../../assets/iconsassets/Annad.png')}
            style={{
              width: 35,
              height: 35,
              marginTop: 5,
            }}
          />
          <Text
            style={{
              flex: 1,
              fontSize: 25,
              fontWeight: 'bold',
              color: 'green',
              marginLeft: 10,
              textAlignVertical: 'center',
              marginTop: -7,
            }}>
            Anna Ka Dosa
          </Text>
        </View>

        <TouchableOpacity
          style={{margin: 3, borderRadius: 50, overflow: 'hidden'}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../assets/iconsassets/user-photo.png')}
            style={{
              width: 30,
              height: 30,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{margin: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'lightgray',
            padding: 10,
            marginBottom: 30,
          }}>
          <TextInput
            style={{
              fontSize: 18,
              color: 'black',
            }}
            placeholder="Search for Dosa or more"
            //editable={false}
            onChangeText={setSearchtext}
            value={searchtext}
            onSubmitEditing={handleSearch}
          />
          <View style={{margin: 7}}>
            {!search ? (
              <TouchableOpacity onPress={handleSearch}>
                <Image
                  source={require('../../assets/iconsassets/Search.png')}
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleRemovesearch}>
                <Image
                  source={require('../../assets/iconsassets/Cross.png')}
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {!search ? (
          <View>
            <View style={{borderRadius: 20, overflow: 'hidden'}}>
              <SliderBox
                images={img.slice(0, 4)}
                sliderBoxHeight={200}
                dotColor="#00a954"
                autoplay={true}
                imageLoadingColor={'#00a954'}
                autoplayInterval={2000}
                onCurrentImagePressed={index => {
                  // console.warn(`image ${index} pressed`)
                  navigation.navigate('Searchmenu', {
                    id: apiImages[index].link_id,
                  });
                }}
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Explore Menu
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <Text
                  style={{
                    //flex: 1,
                    //fontSize: 27,
                    fontWeight: 'bold',
                    //color: 'black',
                    marginTop: 10,
                    textAlignVertical: 'center',
                  }}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginBottom: 20,
                alignItems: 'center',
              }}>
              <FlatList
                scrollEnabled={false}
                data={categories.slice(0, 6)}
                numColumns={3}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <CategoryItem item={item} navigation={navigation} />
                )}
              />
            </View>
            <View
              style={{
                borderRadius: 30,
                overflow: 'hidden',
                position: 'relative',
              }}>
              <Image
                source={require('../../assets/iconsassets/home-order-now.gif')}
                style={{height: 200, width: '100%'}}
              />
              <View
                style={{
                  flex: 1,
                  position: 'absolute',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 12,
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
                  DOSA STARTING @49 EACH
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
                  * any 2 regular & medium dosa
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
            <View
              style={{
                // flexDirection: 'row',
                //justifyContent: 'space-between',
                marginVertical: 30,
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
                Outlet Rating
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //justifyContent: 'space-between',
                borderRadius: 20,
                borderWidth: 0.3,
                borderColor: 'gray',
                padding: 15,
              }}>
              <View>
                <Image
                  source={require('../../assets/iconsassets/Anna.png')}
                  style={{height: 50, width: 50}}
                />
              </View>
              <View style={{flex: 1, marginLeft: 10}}>
                <Text
                  style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                  Anna Ka Dosa
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    color: 'gray',

                    fontWeight: 'bold',
                  }}>
                  Shop 2,Krishna Market,Near Deshbandhu College,Kalkaji,New
                  Delhi,Delhi 110019
                </Text>
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
                    View Restaurant
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 5}}>
                  <Text
                    style={{
                      color: 'red',
                      textDecorationLine: 'underline',
                      //fontWeight: 'bold'
                    }}>
                    Reviews
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  source={require('../../assets/iconsassets/review-icon.png')}
                  style={{height: 80, width: 80}}
                />
              </View>
            </View>
            <View
              style={{
                // flexDirection: 'row',
                //justifyContent: 'space-between',
                marginVertical: 30,
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
                Best Sellers
              </Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              //style={{marginHorizontal:}}
            >
              {bestseller?.map((item, index) => (
                <ProductItem
                  load={load}
                  setLoad={setLoad}
                  key={item.id}
                  item={item}
                  navigation={navigation}
                  index={index}
                />
              ))}
            </ScrollView>
            <View
              style={{
                // flexDirection: 'row',
                //justifyContent: 'space-between',
                marginVertical: 30,
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
                Recommended Items
              </Text>

              <FlatList
                scrollEnabled={false}
                data={recomended}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <RenderCategoryItem item={item} navigation={navigation} />
                )}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              // flexDirection: 'row',
              //justifyContent: 'space-between',
              marginVertical: 30,
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
              Searched Items
            </Text>

            <FlatList
              scrollEnabled={false}
              data={searchdata}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <RenderCategoryItem item={item} navigation={navigation} />
              )}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

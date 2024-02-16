import {
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
import axios from 'axios';
import Loading from '../loadingcomponent/loading';
import RenderCategoryItem from '../categoriescomponent/Rendorcategoryitem';

const Searchmenu = ({navigation, route}) => {
  const {id} = route.params;
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [load, setLoad] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const apiUrl = 'https://techiedom.com/annakadosa/api/search';
        const body = {category_id: id};
        const response = await axios.post(apiUrl, body);

        console.log(response.data, id);
        setProducts(response.data.data);
        setAllProducts(response.data.data); // Save all products

        setLoad(false);
      } catch (error) {
        setLoad(false);
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
      }
    };

    fetchData();
  }, [id]);

  const handleSearch = () => {
    // Toggle search state
    setIsSearchActive(!isSearchActive);

    if (isSearchActive) {
      // If search is deactivated, reset products to allProducts
      setProducts(allProducts);
      setSearchQuery('');
    } else {
      // Filter products based on the search query
      const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setProducts(filteredProducts);
    }
  };
  // const handleSearch = () => {
  //   if (isSearchActive && searchQuery.trim() === '') {
  //     // If search is deactivated and search query is empty, reset to allProducts
  //     setProducts(allProducts);
  //     setSearchQuery('');
  //     setIsSearchActive(!isSearchActive);
  //   } else if (!isSearchActive && searchQuery.trim() === '') {
  //     // If search is inactive and search query is empty, reset to allProducts
  //     setProducts(allProducts);
  //   } else {
  //     // Filter products based on the search query
  //     const filteredProducts = allProducts.filter(product =>
  //       product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  //     );
  //     setProducts(filteredProducts);
  //   }
  // };

  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{backgroundColor: '#fed920', padding: 9, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
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
          Search
        </Text>
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
            style={{fontSize: 18, color: 'black'}}
            placeholder="Search for Dosa or more"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            onSubmitEditing={handleSearch} // Trigger search on submit
          />
          <View style={{margin: 7}}>
            <TouchableOpacity onPress={handleSearch}>
              <Image
                source={
                  isSearchActive
                    ? require('../assets/iconsassets/Cross.png') // Cross icon
                    : require('../assets/iconsassets/Search.png') // Search icon
                }
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: 0}}>
          <Text
            style={{
              //flex: 1,
              fontSize: 27,
              fontWeight: 'bold',
              color: 'black',
              //marginLeft: 10,
              //textAlign: 'center',
            }}>
            Trending Items
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

export default Searchmenu;

const styles = StyleSheet.create({});

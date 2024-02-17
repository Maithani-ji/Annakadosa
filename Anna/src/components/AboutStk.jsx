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
import axios from 'axios';
import Loading from '../loadingcomponent/loading';

const About = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [details, setDetails] = useState('');
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        'https://techiedom.com/annakadosa/api/about/us',
      );

      // Assuming the API returns a JSON object
      const data = response.data.data;

      // Do something with the fetched details
      console.log('Fetched Details:', data);
      setDetails(data.about_us);
      // You can return the fetched details or process them further
    } catch (error) {
      // Handle errors here
      console.error('Error fetching details in about us :', error.message);
      throw error; // Rethrow the error or handle it as needed
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
          About Us
        </Text>
      </View>
      <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Our Story
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 17,
              color: 'gray',

              marginBottom: 20,
            }}>
            {details}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({});

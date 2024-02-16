import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const About = ({navigation}) => {
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
              fontSize: 16,
              color: 'gray',

              marginBottom: 20,
            }}>
            At Anna Ka Dosa, we invite you to embark on a gastronomic adventure
            through the vibrant and diverse flavors of South Indian cuisine.
            Nestled in the heart of Delhi, our restaurant is more than just a
            dining destination; it's a celebration of tradition, culture, and
            the rich tapestry of culinary heritage that defines South India.
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'gray',

              marginBottom: 20,
            }}>
            Our menu is a curated selection of South Indian culinary treasures,
            ranging from crispy dosas that melt in your mouth to aromatic
            biryanis that transport you to the bustling streets of Chennai. Each
            dish is a masterpiece, prepared with love and precision, using the
            finest ingredients that capture the essence of South Indian spices.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({});

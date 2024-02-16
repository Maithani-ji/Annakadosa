import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Feedback = ({navigation}) => {
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
          Send Feedback
        </Text>
      </View>
      <ScrollView style={{margin: 20}}>
        <View>
          <Text style={{fontSize: 23, color: 'black', fontWeight: 'bold'}}>
            Send Feedback
          </Text>
        </View>
        <View
          style={{
            marginVertical: 20,
          }}>
          <Text style={{fontSize: 18, color: 'gray'}}>
            Tell us what you love about the app,or what we could be doing
            better.
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
            marginVertical: 20,
            flex: 1,
          }}>
          <TextInput style={{fontSize: 18}} placeholder="Enter Feedback" />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          style={{
            backgroundColor: 'green',
            padding: 20,
            alignSelf: 'center',
            borderRadius: 40,
            marginTop: 250,
          }}>
          <Text style={{color: 'yellow', fontWeight: 'bold'}}>
            Submit Feedback
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({});

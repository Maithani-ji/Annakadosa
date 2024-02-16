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

const Notifications = ({navigation}) => {
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
              // flex: 1,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'green',
              marginLeft: 10,
              textAlignVertical: 'center',
              marginBottom: -6,
            }}>
            Kalkaji Extn,Kalkaji,Delhi 110045
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
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              //flex: 1,
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              // marginLeft: 10,
              //textAlignVertical: 'center',
              //  marginBottom: -6,
            }}>
            Notification
          </Text>
        </View>
        {[...Array(10)].map((_, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
              marginBottom: 10,
            }}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: 'orange',
                padding: 10,
                borderRadius: 10,
                marginRight: 10,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'red',
                  textAlign: 'center',
                }}>
                LP
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Ariving anyime now! 🍕
              </Text>
              <Text style={{color: 'black', marginBottom: 5}}>
                Tom hedge is on the way to deliver your order
              </Text>
              <Text style={{marginBottom: 10}}>30 Aug</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});

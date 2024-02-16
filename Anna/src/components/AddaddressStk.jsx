import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import axios from 'axios';
import Loading from '../loadingcomponent/loading';
import {getData} from '../utils/AsyncStorag';

const Addaddress = ({navigation, route}) => {
  const {editable, editaddress} = route?.params;
  const [load, setload] = useState(false);
  const initialState = editaddress
    ? {
        selectedId: editaddress.type === 'home' ? '1' : '2',
        selectedtype: editaddress.type,
        address: editaddress.address,
        landmark: editaddress.landmark,
      }
    : {
        selectedId: null,
        selectedtype: '',
        address: '',
        landmark: '',
      };

  const [selectedId, setSelectedId] = useState(initialState.selectedId);
  const [selectedtype, setSelectedtype] = useState(initialState.selectedtype);
  const [address, setAddress] = useState(initialState.address);
  const [landmark, setLandmark] = useState(initialState.landmark);
  const handleaddressadd = async () => {
    //console.log('address', address, selectedtype, landmark);
    setload(true);
    try {
      const id = await getData('id');
      const response = await axios.post(
        'https://techiedom.com/annakadosa/api/add/address',
        {
          user_id: id,
          delivery_area_id: 5,
          first_name: 'raj',
          last_name: 'singh',
          address: address,
          address_type: selectedtype,
          landmark: landmark,
        },
      );
      setload(false);
      console.log('address', response.data);
      Alert.alert(
        'Success',
        'Address added successfully',
        [
          {
            text: 'OK',
            onPress: () => {
              // Handle OK button press
              navigation.replace('ManageAddress');
            },
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      setload(false);
      Alert.alert(
        'Error',
        'Error in adding New Address',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.replace('ManageAddress');
            },
          },
        ],
        {cancelable: false},
      );

      console.error('Error adding address:', error);
    }
  };
  const handleeditaddress = async () => {
    setload(true);
    try {
      const addressData = {
        id: editaddress.id,
        delivery_area_id: 5,
        first_name: 'raj',
        last_name: 'singh',
        address: address,
        address_type: selectedtype,
        landmark: landmark,
      };
      console.log(addressData);
      const response = await axios.post(
        'https://techiedom.com/annakadosa/api/update/address',
        addressData,
      );
      setload(false);
      console.log('address', response.data);
      Alert.alert(
        'Success',
        'Address Edited successfully',
        [
          {
            text: 'OK',
            onPress: () => {
              // Handle OK button press
              navigation.replace('ManageAddress');
            },
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      setload(false);
      Alert.alert(
        'Error',
        'Error in Editing New Address',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.replace('ManageAddress');
            },
          },
        ],
        {cancelable: false},
      );

      console.error('Error editing address:', error);
    }
  };
  const handledeleteaddress = async () => {
    setload(true);
    try {
      const response = await axios.post(
        'https://techiedom.com/annakadosa/api/destroy/address',
        {
          id: editaddress.id,
        },
      );
      setload(false);
      Alert.alert(
        'Success',
        'Address Deleted successfully',
        [
          {
            text: 'OK',
            onPress: () => {
              // Handle OK button press
              navigation.replace('ManageAddress');
            },
          },
        ],
        {cancelable: false},
      );
      // Handle the response as needed
      console.log('Delete address response:', response.data);

      // Additional logic after successful deletion
    } catch (error) {
      setload(false);
      Alert.alert(
        'Error',
        'Error in Deleting Address',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.replace('ManageAddress');
            },
          },
        ],
        {cancelable: false},
      );
      // Handle errors, show an alert, log the error, etc.
      console.error('Error deleting address:', error);
    }
  };
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Home',
        value: 'home',
      },
      {
        id: '2',
        label: 'Office',
        value: 'office',
      },
    ],
    [],
  );
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
        {editable ? (
          <Text
            style={{
              flex: 1,
              fontSize: 22,
              //sfontWeight: 'bold',
              color: 'black',
              marginLeft: 20,
              textAlignVertical: 'center',
            }}>
            Edit Address
          </Text>
        ) : (
          <Text
            style={{
              flex: 1,
              fontSize: 22,
              //sfontWeight: 'bold',
              color: 'black',
              marginLeft: 20,
              textAlignVertical: 'center',
            }}>
            Add New Address
          </Text>
        )}
      </View>
      <View style={{margin: 20}}>
        <View>
          {/* <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Your address
          </Text> */}
          <TextInput
            style={{
              fontSize: 18,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
            }}
            placeholder="Door / Flat-no"
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <View>
          {/* <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 30,
            }}>
            Nearest landmark
          </Text> */}
          <TextInput
            style={{
              fontSize: 18,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
            }}
            placeholder="Landmark"
            value={landmark}
            onChangeText={setLandmark}
          />
        </View>
        <View>
          {/* <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 30,
              marginBottom: 10,
            }}>
            Address Type
          </Text> */}
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              marginLeft: -10,
            }}>
            <RadioGroup
              radioButtons={radioButtons}
              color={'red'}
              onPress={value => {
                setSelectedId(value);
                if (value == 1) {
                  setSelectedtype('home');
                } else if (value == 2) {
                  setSelectedtype('office');
                }
              }}
              selectedId={selectedId} // Use selected gender instead of selected id
              containerStyle={{}}
              descriptionStyle={{}}
              labelStyle={{}}
              layout="row"
            />
          </View>
        </View>
        <TouchableOpacity
          //onPress={() => navigation.navigate('ManageAddress')}
          onPress={!editable ? handleaddressadd : handleeditaddress}
          style={{
            marginTop: 40,
            alignSelf: 'center',
            backgroundColor: 'green',
            borderRadius: 40,
            paddingHorizontal: 25,
            paddingVertical: 10,
          }}>
          {editable ? (
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'yellow',
              }}>
              Edit Address
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'yellow',
              }}>
              Add
            </Text>
          )}
        </TouchableOpacity>
        {editable && (
          <TouchableOpacity
            //   onPress={() => navigation.navigate('ManageAddress')}
            onPress={handledeleteaddress}
            style={{
              marginTop: 20,
              alignSelf: 'center',
              backgroundColor: 'red',
              borderRadius: 40,
              paddingHorizontal: 25,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Delete Address
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Addaddress;

const styles = StyleSheet.create({});

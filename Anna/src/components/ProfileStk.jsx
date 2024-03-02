import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import Loading from '../loadingcomponent/loading';
import {getData} from '../utils/AsyncStorag';
import Snackbar from 'react-native-snackbar';

const Profile = ({navigation}) => {
  useEffect(() => {
    fetchData();
  }, []); // Dependency array to ensure the effect runs when 'id' changes
  const fetchData = async () => {
    setLoad(true);
    const id = await getData('id');
    try {
      const requestBody = {
        user_id: id,
      };

      const response = await axios.post(
        'https://newannakadosa.com/api/profile/',
        requestBody,
      );
      console.log('data', response.data.data[0]);
      // Check if response data is truthy before destructuring
      if (!!response.data) {
        const userData = response.data.data[0]; // Assuming the user data is in an array
        console.log('userdata', userData);
        // Set states based on fetched user data
        setUserData(userData);
        setFullname(userData.name);
        setemail(userData.email);
        setdatetext(userData.dob);
        seturl(userData.image);
        if (userData.gender == 'male') {
          setSelectedId('1');
          setSelectedGender('male');
        } else if (userData.gender == 'female') {
          setSelectedId('2');
          setSelectedGender('female');
        }
      }
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.error('API error:', error);
      Snackbar.show({
        text: 'Failed in fetching information ',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70, // Adjust this value to position the Snackbar at the desired distance from the top
      });
    }
  };
  const [user, setUserData] = useState(null);
  const [selectedId, setSelectedId] = useState();
  const [selectedGender, setSelectedGender] = useState('');
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('');
  const [show, setshow] = useState(false);
  const [datetext, setdatetext] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setemail] = useState();
  const [load, setLoad] = useState(false);
  const [url, seturl] = useState('');
  const onchange = (event, selectedDate) => {
    setshow(false);
    const currentDate = selectedDate || date;
    //setshow(Platform.OS === 'android'); // Temporarily keep visible on Android
    setdate(currentDate);
    const tempDate = new Date(currentDate);
    const fdate = `${tempDate.getDate()}-${
      tempDate.getMonth() + 1
    }-${tempDate.getFullYear()}`;

    //const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    setdatetext(fdate);
  };

  const showMode = currentMode => {
    setshow(!show);
    setmode(currentMode);
  };
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Male',
        value: 'male',
      },
      {
        id: '2',
        label: 'Female',
        value: 'female',
      },
    ],
    [],
  );
  const handleRegister = async () => {
    setLoad(true);
    const id = await getData('id');
    try {
      // Check if required data is available
      if (fullname || email || selectedGender || datetext) {
        const user = {
          user_id: id,
          name: fullname,
          email: email, // check from backend if there is any checking in email
          gender: selectedGender,
          dob: datetext,
        };

        // console.log('User Data:', user);

        const response = await axios.post(
          'https://newannakadosa.com/api/welcome/profile', // Replace with your actual API endpoint
          user,
        );

        // console.log('API response:', response.data);

        setLoad(false);
        Snackbar.show({
          text: 'Profile Updated Successfully',
          textColor: 'white',
          backgroundColor: 'green',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70, // Adjust this value to position the Snackbar at the desired distance from the top
        });

        //navigation.navigate('Main');
        fetchData();
      } else {
        setLoad(false);
        Alert.alert('Please fill in all the required fields');
      }
    } catch (error) {
      setLoad(false);
      Snackbar.show({
        text: 'Failed to Update profile !',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70, // Adjust this value to position the Snackbar at the desired distance from the top
      });
      console.error('API error:', error);
    }
  };

  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{backgroundColor: '#fed920', padding: 9, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/iconsassets/left-arrow.png')}
            style={{
              width: 30,
              height: 30,
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
          Profile
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white', margin: 20}}>
        {show && (
          <DateTimePicker
            testID="datetimepicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onchange}
          />
        )}
        {/* <TouchableOpacity
          style={{marginLeft: -10, marginBottom: 5, flexDirection: 'row'}}>
          <Image
            source={require('../assets/iconsassets/user-photo.png')}
            style={{height: 70, width: 70, marginLeft: 0}}
            // source={{ uri: imageUrl }} source={{uri: url}}
            // source={{uri: user?.image}}
          />
          <Image
            source={require('../assets/iconsassets/edit.png')}
            style={{height: 20, width: 20, tintColor: 'black'}}
          />
        </TouchableOpacity> */}
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 5,
          }}>
          {user?.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            //fontWeight: 'bold',
            color: 'gray',
            marginVertical: 5,
          }}>
          +91 {user?.phone}
        </Text>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 30,
            }}>
            Full Name
          </Text>
          <TextInput
            style={{
              fontSize: 18,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              color: 'black',
            }}
            placeholder="Your full Name"
            onChangeText={setFullname}
            value={fullname}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 25,
            }}>
            Email Address
          </Text>
          <TextInput
            style={{
              fontSize: 18,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              color: 'black',
            }}
            keyboardType="email-address"
            placeholder="Your Email Address"
            onChangeText={setemail}
            value={email}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              //color: 'black',
              marginTop: 30,
              marginBottom: 10,
            }}>
            Gender
          </Text>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              color={'black'}
              onPress={value => {
                setSelectedId(value);
                if (value == '1') {
                  setSelectedGender('male');
                } else if (value == '2') {
                  setSelectedGender('female');
                }
              }}
              selectedId={selectedId} // Use selected gender instead of selected id
              containerStyle={{}}
              descriptionStyle={{}}
              labelStyle={{color: 'black'}}
              layout="row"
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 20,
            }}>
            Date Of Birth
          </Text>
          <TouchableOpacity onPress={() => showMode('date')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: 'lightgray',
              }}>
              <TextInput
                style={{
                  fontSize: 18,
                  color: 'black',
                }}
                placeholder="DD-MM-YYYY"
                editable={false}
                value={datetext}
              />
              <View style={{margin: 7}}>
                <Image
                  source={require('../assets/iconsassets/calender-icon.png')}
                  style={{height: 30, width: 30}}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          style={{
            marginTop: 40,
            alignSelf: 'center',
            backgroundColor: 'green',
            borderRadius: 40,
            padding: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'yellow',
            }}>
            Update Changes
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

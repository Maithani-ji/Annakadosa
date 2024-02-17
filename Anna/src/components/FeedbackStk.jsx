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
import React, {useState} from 'react';

const Feedback = ({navigation}) => {
  const [defaultrating, setdefaultrating] = useState(1);
  const [starmp, setstarmp] = useState([1, 2, 3, 4, 5]);
  const [feedback, setFeedback] = useState();
  const handlesubmit = () => {
    if (feedback.trim() === '') {
      Alert.alert('Please wrtie a feedback first');
      return;
    }
    Alert.alert('Thank you.', 'Your feedback has been noted!😀 ');
    setFeedback('');
    setdefaultrating(1);
    navigation.replace('Main');
  };
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
          Send Feedback & Rate us
        </Text>
      </View>
      <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
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
          <TextInput
            style={{fontSize: 18}}
            placeholder="Enter Feedback"
            onChangeText={setFeedback}
            value={feedback}
          />
        </View>

        <View style={{alignSelf: 'center', marginVertical: 10}}>
          <Text
            style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}></Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}>
          {starmp.map((item, key) => (
            <TouchableOpacity
              //activeOpacity={}
              key={item}
              onPress={() => setdefaultrating(item)}>
              <Image
                source={
                  item <= defaultrating
                    ? require('../assets/iconsassets/rate-usy.png')
                    : require('../assets/iconsassets/rate-usb.png')
                }
                style={{height: 40, width: 40}}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{marginVertical: 25}}>
          <Text style={{textAlign: 'center', fontSize: 15}}>
            Your word makes Anna Ka Dosa a better place.You are the influencer.
          </Text>
        </View>
        <TouchableOpacity
          onPress={handlesubmit}
          style={{
            backgroundColor: 'green',
            padding: 20,
            alignSelf: 'center',
            borderRadius: 40,
            marginTop: 25,
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

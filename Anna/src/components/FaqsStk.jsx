import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Faqs = ({navigation}) => {
  const [showItems, setShowItems] = useState(Array(9).fill(false));

  const handleShowItem = index => {
    const updatedShowItems = [...showItems];
    updatedShowItems[index] = !updatedShowItems[index];
    setShowItems(updatedShowItems);
  };

  const questions = [
    'Can I do cash on delivery for contactless delivery?',
    'How do I know where my pizzas will be kept?',
    'My money is deducted but order is not showing in order screen.',
    'If my order is in rejected status, what will happen to my money?',
    'What is the refund cycle of payments?',
    'Where can I avail contactless delivery?',
    'What if I want to cancel my order after paying?',
    'Is there cash on delivery available?',
    'How can I track my order?',
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{backgroundColor: '#fed920', padding: 9, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
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
            color: 'black',
            marginLeft: 20,
            textAlignVertical: 'center',
          }}>
          FAQs
        </Text>
      </View>
      <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
        {questions.map((question, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleShowItem(index)}
            style={{
              borderBottomWidth: 0.8,
              borderColor: 'lightgray',
              marginBottom: 20,
            }}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {question}
              </Text>
              <View>
                <Image
                  source={require('../assets/iconsassets/dropdown.png')}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: 'red',
                  }}
                />
              </View>
            </View>
            {showItems[index] && (
              <View style={{marginBottom: 20}}>
                <Text>
                  No, you cannot opt for cash-on-delivery. Since we are trying
                  to make this entire process contactless, cash-on-delivery in
                  this case will not be possible.
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faqs;

const styles = StyleSheet.create({});

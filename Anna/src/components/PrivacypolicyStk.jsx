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

const Privacy = ({navigation}) => {
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
            //sfontWeight: 'bold',
            color: 'black',
            marginLeft: 20,
            textAlignVertical: 'center',
          }}>
          Privacy Policy
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{margin: 20}}>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: 'gray',

              marginBottom: 20,
            }}>
            Eget nulla adipiscing nullam enim nec, magna. Vel lobortis feugiat
            parturient arcu sit tincidunt lacus.
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'gray',

              marginBottom: 20,
            }}>
            Auctor turpis vitae facilisis feugiat tellus cursus. Dis arcu eget
            odio arcu consectetur turpis. Sit tempor, ac ultricies ullamcorper.
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'gray',

              marginBottom: 20,
            }}>
            Lectus ac cursus vitae diam faucibus placerat fusce nisl, lorem.
            Sapien ullamcorper in id vitae rhoncus, turpis pellentesque neque
            blandit.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            User Information
          </Text>
          <View>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Eget nulla adipiscing nullam enim nec, magna. Vel lobortis feugiat
              parturient arcu sit tincidunt lacus.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Auctor turpis vitae facilisis feugiat tellus cursus. Dis arcu eget
              odio arcu consectetur turpis. Sit tempor, ac ultricies
              ullamcorper.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Lectus ac cursus vitae diam faucibus placerat fusce nisl, lorem.
              Sapien ullamcorper in id vitae rhoncus, turpis pellentesque neque
              blandit.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Lectus ac cursus vitae diam faucibus placerat fusce nisl, lorem.
              Sapien ullamcorper in id vitae rhoncus, turpis pellentesque neque
              blandit.
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Cookies
          </Text>
          <View>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Eget nulla adipiscing nullam enim nec, magna. Vel lobortis feugiat
              parturient arcu sit tincidunt lacus.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Auctor turpis vitae facilisis feugiat tellus cursus. Dis arcu eget
              odio arcu consectetur turpis. Sit tempor, ac ultricies
              ullamcorper.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Lectus ac cursus vitae diam faucibus placerat fusce nisl, lorem.
              Sapien ullamcorper in id vitae rhoncus, turpis pellentesque neque
              blandit.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Lectus ac cursus vitae diam faucibus placerat fusce nisl, lorem.
              Sapien ullamcorper in id vitae rhoncus, turpis pellentesque neque
              blandit.
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Links To Other Sites
          </Text>
          <View>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Eget nulla adipiscing nullam enim nec, magna. Vel lobortis feugiat
              parturient arcu sit tincidunt lacus. Eget nulla adipiscing nullam
              enim nec, magna. Vel lobortis feugiat parturient arcu sit
              tincidunt lacus.
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Information Sharing
          </Text>
          <View>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Eget nulla adipiscing nullam enim nec, magna. Vel lobortis feugiat
              parturient arcu sit tincidunt lacus.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Auctor turpis vitae facilisis feugiat tellus cursus. Dis arcu eget
              odio arcu consectetur turpis. Sit tempor, ac ultricies
              ullamcorper.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Lectus ac cursus vitae diam faucibus placerat fusce nisl, lorem.
              Sapien ullamcorper in id vitae rhoncus, turpis pellentesque neque
              blandit.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Lectus ac cursus vitae diam faucibus placerat fusce nisl, lorem.
              Sapien ullamcorper in id vitae rhoncus, turpis pellentesque neque
              blandit.
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Information Security
          </Text>
          <View>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Eget nulla adipiscing nullam enim nec, magna. Vel lobortis feugiat
              parturient arcu sit tincidunt lacus. Auctor turpis vitae facilisis
              feugiat tellus cursus. Dis arcu eget odio arcu consectetur turpis.
              Sit tempor, ac ultricies ullamcorper.
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Lectus ac cursus vitae diam faucibus placerat fusce nisl, lorem.
              Sapien ullamcorper in id vitae rhoncus, turpis pellentesque neque
              blandit.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'gray',

                marginBottom: 20,
              }}>
              Lectus ac cursus vitae diam faucibus placerat fusce nisl, lorem.
              Sapien ullamcorper in id vitae rhoncus, turpis pellentesque neque
              blandit.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({});

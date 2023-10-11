import {React, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';

const {width, height} = Dimensions.get('window');
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
const Screen1 = ({navigation}) => {
  const [AccNo, setAccNo] = useState();
  const imageSize = 500;
  const fetchData = () => {
    // fetch('http://183.82.113.10:9843/test_iso', {
    //   method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json',
    //   //     // Add any other headers if needed
    //   //   },
    //   body: JSON.stringify({
    //     account_Number: '1872989',
    //   }),
    // })
    //   .then(res => console.log('llllll', res))
    //   .catch(error => console.error('Error:', error));

    axios
      .post('http://183.82.113.10:9843/test_iso', {
        account_Number: AccNo,
      })
      .then(response => {
        console.log(AccNo);
        let data = response.data;
        if (AccNo) {
          if (AccNo.length == 11) {
            navigation.navigate('screen2', {data});
          } else {
            let message = data.Alert;
            Alert.alert(
              'INVALID INPUT', // Title of the alert dialog
              message, // Message of the alert dialog
              [
                {
                  text: 'OK', // Second button (mandatory)
                  onPress: () => {
                    cancelable: false;
                  },
                },
              ],
              // Whether the alert can be dismissed by tapping outside of it (optional)
            );
          }
        } else {
          Alert.alert(
            'INVALID INPUT', // Title of the alert dialog
            'Please Enter Account Number', // Message of the alert dialog
            [
              {
                text: 'OK', // Second button (mandatory)
                onPress: () => {
                  cancelable: false;
                },
              },
            ],
            // Whether the alert can be dismissed by tapping outside of it (optional)
          );
        }
      })
      .catch(error => {
        console.log('======>', error);
      });
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../logo/tngbd.png')}
        resizeMode="stretch"
        style={{
          flex: 1,
          opacity: 0.7,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Image
        source={require('../logo/Ourly_Logo_square.png')} // Replace with the path to your transparent logo file
        style={{width: 200, height: 200, backgroundColor: 'transparent'}}
        resizeMode="contain" // Adjust the resizeMode as per your requirement
      /> */}
        <View
          style={{
            // backgroundColor: 'yellow',
            height: 200,
            width: 300,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>
              AccountNo:
            </Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={val => setAccNo(val)}
              style={{
                borderWidth: 1,
                width: 200,
                height: 50,
                borderRadius: 8,
                fontSize: 20,
                fontWeight: '900',
                backgroundColor: '#fff',
              }}></TextInput>
          </View>
          <View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: 100,
                height: 30,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
              }}
              onPress={() => fetchData()}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen1;

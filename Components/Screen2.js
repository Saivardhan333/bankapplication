import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';

const Screen2 = ({navigation, route}) => {
  let data = route.params;
  //   let dataa = {
  //     Account_Type: 'Savingsacct',
  //     Customer_Name: 'Gopal',
  //     Account_Balance: '100.00',
  //     Branch_Id: 'BANK123',
  //   };
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
        <View
          style={{
            borderWidth: 0.1,
            borderRadius: 10,
            width: 300,
            height: 200,
            justifyContent: 'space-around',
            padding: 20,
            backgroundColor: '#fff',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
              Account_Type :
            </Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#000000'}}>
              {data.data.Account_Type}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
              Customer_Name :
            </Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#000000'}}>
              {data.data.Customer_Name}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
              Account_Balance :
            </Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#000000'}}>
              {data.data.Account_Balance}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
              Branch_Id :
            </Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#000000'}}>
              {data.data.Branch_Id}
            </Text>
          </View>
        </View>

        {/* <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('screen1')}
      /> */}
      </ImageBackground>
    </View>
  );
};

export default Screen2;

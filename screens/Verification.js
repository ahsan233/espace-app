import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Verification({navigation}) {
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <View style={styles.backView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Image
            style={styles.back}
            source={require('../assets/images/back.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.forget}>Verification</Text>
        <Text style={styles.reset}>
          Enter code that you recieved on your email
        </Text>
      </View>
      <View style={styles.Code_InputView}>
        <TextInput
          style={styles.Code_Input}
          keyboardType="numeric"
          placeholder="0"
        />
        <TextInput
          style={styles.Code_Input}
          keyboardType="numeric"
          placeholder="0"
        />
        <TextInput
          style={styles.Code_Input}
          keyboardType="numeric"
          placeholder="0"
        />
        <TextInput
          style={styles.Code_Input}
          keyboardType="numeric"
          placeholder="0"
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 310}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ResetPassword');
          }}
          style={styles.button}>
          <Text style={styles.verify}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    height: hp('15%'), // 70% of height device screen
    width: wp('20%'), // 80% of width device screen}
  },
  back: {
    height: hp('5%'), // 70% of height device screen
    width: wp('5%'), // 80% of width device screen}
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backView: {
    padding: 10,
  },
  TextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forget: {
    fontSize: hp('3.2%'),
    fontFamily: 'Rubik-Regular',
    color: '#000',
  },
  reset: {
    fontSize: hp('1.9%'),
    fontFamily: 'Rubik-Regular',
    padding: 10,
  },
  Code_Input: {
    width: 50,
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Rubik-Regular',
    margin: 10,
  },
  Code_InputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    width: wp('80%'), // 80% of width device screen}
    height: hp('6.5%'),
    backgroundColor: '#00C8BC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verify: {
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2.5%'),
  },
});

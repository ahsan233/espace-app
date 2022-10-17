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

export default function ForgetPassword({navigation}) {
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
        <Text style={styles.forget}>Forget Password</Text>
        <Text style={styles.reset}>
          Enter your email to get a verification code
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.TextInput}>
          <View style={{marginLeft: 10}}>
            <Image
              style={styles.email}
              source={require('../assets/images/email.png')}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="Enter your email"
          />
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 320}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Verification');
          }}
          style={styles.button}>
          <Text style={styles.send}>Send</Text>
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
    width: wp('5%'), // 80% of width device screen
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
  TextInput: {
    width: wp('80%'), // 80% of width device screen}
    height: hp('6.5%'),
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderColor: '#808080',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  TextinputStyle: {
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Rubik-Regular',
    width: 225,
  },
  email: {
    height: hp('5%'), // 70% of height device screen
    width: wp('5%'), // 80% of width device screen}
    justifyContent: 'center',
  },
  button: {
    width: wp('80%'), // 80% of width device screen}
    height: hp('6.5%'),
    backgroundColor: '#00C8BC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  send: {
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2.5%'),
  },
});

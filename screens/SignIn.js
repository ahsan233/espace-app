import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
export default function SignIn({navigation}) {
  const [done, setdone] = useState(false);
  const [Show, setShow] = useState(false);
  const [Visible, setVisible] = useState(true);
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.welcome}>Welcome to E-space</Text>
        <Text style={styles.getstarted}>
          Sign In to get started with E-space
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
      <View style={{alignItems: 'center'}}>
        <View style={styles.TextInput}>
          <View style={{marginLeft: 10}}>
            <Image
              style={styles.lock}
              source={require('../assets/images/lock.png')}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="Enter your password"
            secureTextEntry={Visible}
          />
          <TouchableOpacity
            onPress={() => {
              setVisible(!Visible);
              setShow(!Show);
            }}>
            <Image
              style={styles.lock}
              source={require('../assets/images/eye.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <CheckBox
          style={{marginLeft: 33}}
          disabled={false}
          value={done}
          onValueChange={Value => setdone(Value)}
        />
        <Text style={styles.rememberme}>Remeber me</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgetPassword');
          }}>
          <Text style={styles.forget}>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginTop: 200}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.signin}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.bottomView}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
  imageContainer: {
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: hp('3.2%'),
    fontFamily: 'Rubik-Regular',
    color: '#000',
  },
  getstarted: {
    fontSize: hp('1.9%'),
    fontFamily: 'Rubik-Regular',
    padding: 10,
  },
  email: {
    height: hp('5%'), // 70% of height device screen
    width: wp('5%'), // 80% of width device screen}
    justifyContent: 'center',
  },
  lock: {
    height: hp('4.5%'), // 70% of height device screen
    width: wp('4.5%'), // 80% of width device screen}
    justifyContent: 'center',
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
  button: {
    width: wp('80%'), // 80% of width device screen}
    height: hp('6.5%'),
    backgroundColor: '#00C8BC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signin: {
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2.5%'),
  },
  bottomView: {
    flexDirection: 'row',
    padding: 10,
  },
  signup: {
    color: '#00C8BC',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2%'),
    marginLeft: 5,
  },
  rememberme: {
    fontFamily: 'Rubik-Regular',
    fontSize: hp('1.8%'),
  },
  forget: {
    fontFamily: 'Rubik-Regular',
    fontSize: hp('1.8%'),
    marginLeft: 80,
  },
});

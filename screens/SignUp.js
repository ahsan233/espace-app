import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function SignUp({navigation}) {
  const [Visible, setVisible] = useState(true);
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
        <Text style={styles.forget}>Let's get started</Text>
        <Text style={styles.reset}>Sign up to create an account</Text>
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
          <TouchableOpacity onPress={() => setVisible(!Visible)}>
            <Image
              style={styles.lock}
              source={require('../assets/images/eye.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 240}}>
        <TouchableOpacity  onPress={() => {
              navigation.navigate('CreateProfile');
            }} style={styles.button}>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.bottomView}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <Text style={styles.signIn}>Sign In</Text>
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
  button: {
    width: wp('80%'), // 80% of width device screen}
    height: hp('6.5%'),
    backgroundColor: '#00C8BC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup: {
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2.5%'),
  },
  bottomView: {
    flexDirection: 'row',
    padding: 10,
  },
  signIn: {
    color: '#00C8BC',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2%'),
    marginLeft: 5,
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
  lock: {
    height: hp('4.5%'), // 70% of height device screen
    width: wp('4.5%'), // 80% of width device screen}
    justifyContent: 'center',
  },
});

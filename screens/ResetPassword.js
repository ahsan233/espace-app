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
export default function ResetPassword({navigation}) {
  const [Visible, setVisible] = useState(true);
  const [ConfrimVisible, setConfrimVisible] = useState(true);
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
        <Text style={styles.forget}>Reset Password</Text>
        <Text style={styles.reset}>Create a strong password</Text>
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
            placeholder="Enter  password"
            secureTextEntry={Visible}
          />
          <TouchableOpacity
            onPress={() => {
              setVisible(!Visible);
            }}>
            <Image
              style={styles.lock}
              source={require('../assets/images/eye.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
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
            placeholder="Confirm  password"
            secureTextEntry={ConfrimVisible}
          />
          <TouchableOpacity
            onPress={() => {
              setConfrimVisible(!ConfrimVisible);
            }}>
            <Image
              style={styles.lock}
              source={require('../assets/images/eye.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 230}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.verify}>Reset</Text>
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
  verify: {
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2.5%'),
  },
});

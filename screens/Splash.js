import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Splash() {
  const navigation = useNavigation();
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      navigation.replace('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <View>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require('../assets/images/logo.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: hp('45%'), // 70% of height device screen
    width: wp('40%'), // 80% of width device screen
    justifyContent: 'center',
    alignItems: 'center',
  },
});

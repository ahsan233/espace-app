import { StyleSheet, Text, View,StatusBar,Image,TouchableOpacity,TextInput, Modal,
 } from 'react-native'
import React,{useState} from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default function PaymentMethod({navigation}) {
  const [Success, setSuccess] = useState(false);

  const onPressHandler = () => {
   
    setSuccess(true);
  };
  const onPressHandler1 = () => {
   
    setSuccess(false);
  };
  return (
    <View style={styles.Container}>
       <Modal
        visible={Success}
        transparent
        onRequestClose={() => setLogout(false)}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_View}>
          <View style={styles.Success_Modal}>
            <View style={styles.Modal_body}>
             
            <Image
          style={styles.subscription}
          source={require('../assets/images/subscription.png')}
          resizeMode="contain"
        />
        <Text style={styles.success}>Success</Text>
        <Text style={styles. paid }>Subscription paid successfully</Text>
        <View style={{alignItems: 'center', marginTop:hp('3%')}}>
        <TouchableOpacity  onPress={
              onPressHandler1
            }style={styles.button1}>
          <Text style={styles.Ok}>OK</Text>
        </TouchableOpacity>
        </View>
        
        
            </View>

          </View>
        </View>
      </Modal>
      <StatusBar backgroundColor="#434343" barStyle={'light-content'} />
    <View style={styles.backView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SubscriptionPlans');
        }}>
        <Image
          style={styles.back}
          source={require('../assets/images/wback.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.create}>Payment Method</Text>
    </View>

  

  <View style={styles.form}>
    <View style={styles.heading}>
     {/* <Text style={styles.paynow}>Pay now and use unlimited</Text> */}
     <Text style={styles.features}>Monthly plan</Text>
     <Text style={styles.month}>99$/month</Text>
     <View style={styles.description}>
     <Text style={styles.paragraph}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco </Text>
                 
     </View>


     <View style={{alignItems: 'center'}}>
        <View style={styles.TextInput}>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="378282246310005"
          />
        </View>
        </View>
        <View style={{alignItems: 'center'}}>
        <View style={styles.TextInput}>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="Enter card holder's name"
          />
        </View>
        
        </View>
        <View style={{alignItems: 'center'}}>
        <View style={styles.TextInput}>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="Enter expiry date"
          />
        </View>
        </View>

        <View style={{alignItems: 'center',flexDirection:"row"}}>
        <View style={styles.TextInput1}>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="Enter CVC"
          />
        </View>
        <View style={{width:wp('10%')}}></View>
        <View style={styles.TextInput1}>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="Enter CVV"
          />
        </View>
        </View>

        <View style={{alignItems: 'center'}}>
        <View style={styles.TextInput}>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="Select Country"
          />
        </View>
        </View>

     </View>
     <View style={{alignItems: 'center', marginTop:hp('5%')}}>
        <TouchableOpacity  onPress={
              onPressHandler
            }style={styles.button}>
          <Text style={styles.pay}>Pay</Text>
        </TouchableOpacity>
        </View>
          



  </View>

    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#434343',
  },
  image: {
    height: hp('15%'), // 70% of height device screen
    width: wp('20%'), // 80% of width device screen}
  },
  back: {
    height: hp('5%'), // 70% of height device screen
    width: wp('5%'), // 80% of width device screen
  },
  subscription:{
    height: hp('34%'), // 70% of height device screen
    width: wp('34%'), // 80% of width device screen
   marginTop:hp('-2%')
  },

backView: {
  padding: 10,
  flexDirection:"row"
},
create:{
  fontSize: hp('2.3%'),
  fontFamily: 'Rubik-Regular',
  color: '#ffffff',
  marginTop:hp('1%'),
  marginLeft:wp('2%')

},
form:{
  backgroundColor:"#ffffff",
  height:hp('95%'),
  width:wp('100%'),
  marginTop:hp('2%'),
  borderTopRightRadius:30,
  borderTopLeftRadius:30


},
heading:{
  alignItems:"center",
  justifyContent:"center"

},
paynow:{
  color: '#00C8BC',
        fontFamily: 'Rubik-Medium',
        fontSize: hp('2.5%'),
        marginTop:hp('2%')
    
},
success:{
  color: '#00C8BC',
  fontFamily: 'Rubik-Medium',
  fontSize: hp('2%'),
  marginTop:hp('-4%')
},
paid:{
  color: '#808080',
  fontFamily: 'Rubik-Regular',
  fontSize: hp('1.8%'),
  marginTop:hp('1.5%')


},
features:{
  color: '#00C8BC',
        fontFamily: 'Rubik-Medium',
        fontSize: hp('2.3%'),
        marginTop:hp('3%')
},
month:{
  color: '#808080',
  fontFamily: 'Rubik-Medium',
  fontSize: hp('2%'),
  marginTop:hp('1%')
    

},
description:{
 width:wp('85%'),
 height:hp('10%')
  
},
paragraph:{
  color:"#808080"
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
  marginTop: hp('3.2%'),
},
TextInput1: {
  width: wp('35%'), // 80% of width device screen}
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
  width:wp('75%'),
},
button: {
  width: wp('80%'), // 80% of width device screen}
  height: hp('6.5%'),
  backgroundColor: '#00C8BC',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
button1: {
  width: wp('60%'), // 80% of width device screen}
  height: hp('6.5%'),
  backgroundColor: '#00C8BC',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
Ok: {
  color: '#ffffff',
  fontFamily: 'Rubik-Medium',
  fontSize: hp('2.5%'),
},
pay: {
  color: '#ffffff',
  fontFamily: 'Rubik-Medium',
  fontSize: hp('2.5%'),
},
centered_View: {
  flex: 1,
  backgroundColor: '#00000099',
  alignItems: 'center',
  justifyContent: 'center',
},
Success_Modal: {
  width: wp('75%'),
  height: hp('50%'),
  backgroundColor: '#ffffff',
  borderRadius: 25,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.25,
  shadowRadius: 2.84,
  elevation: 3,
},
Modal_body:{
alignItems:"center"
}


})
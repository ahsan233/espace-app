import { StyleSheet, Text, View,TouchableOpacity,Image,StatusBar} from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export default function SubscriptionPlans({navigation}) {
  return (
    <View style={styles.Container} >
         <StatusBar backgroundColor="#434343" barStyle={'light-content'} />
         <View style={styles.backView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreateProfile');
        }}>
        <Image
          style={styles.back}
          source={require('../assets/images/wback.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.create}>Subscription Plans</Text>     
      </View>
      <View style={styles.form}>
           <View style={{alignItems:'center'}}>
            <View style={{height:hp('2%')}}></View>
             <View style={styles.Box}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                 <Text style={styles.Monthlyplan}>Monthly plan</Text>
                 <Text style={styles.Month}>99$/month</Text>
                 </View>
                 <View style={styles.description}>
                    <Text style={styles.paragraph}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    </Text>
                 </View>
                 <View style={{marginLeft:wp('45%')}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('PaymentMethod')} style={styles.button}>
                    <Text style={styles.subscibe}>Subscribe Now</Text>
                    </TouchableOpacity>
                </View>
             </View>


             <View style={{alignItems:'center'}}>
             <View style={styles.Box}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                 <Text style={styles.Monthlyplan}>6 months Plan</Text>
                 <Text style={styles.Month1}>999$</Text>
                 </View>
                 <View style={styles.description}>
                    <Text style={styles.paragraph}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    </Text>
                 </View>
                 <View style={{marginLeft:wp('45%')}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('PaymentMethod')} style={styles.button}>
                    <Text style={styles.subscibe}>Subscribe Now</Text>
                    </TouchableOpacity>
                </View>
             </View>
             </View>
             <View style={{alignItems:'center'}}>
             <View style={styles.Box}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                 <Text style={styles.Monthlyplan}>Yearly Plan</Text>
                 <Text style={styles.Month2}>9,999$</Text>
                 </View>
                 <View style={styles.description}>
                    <Text style={styles.paragraph}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    </Text>
                 </View>
                 <View style={{marginLeft:wp('45%')}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('PaymentMethod')} style={styles.button}>
                    <Text style={styles.subscibe}>Subscribe Now</Text>
                    </TouchableOpacity>
                </View>
             </View>
             </View>

            

   
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
      Box:{
        height: hp('20.5%'), // 70% of height device screen
        width: wp('85%'), // 80% of width device screen}
        borderColor:"#434343",
        borderWidth:1,
        borderRadius:17,
        marginTop:hp('3%'),
        alignItems:"center"

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
            fontSize: hp('2.5%'),
            marginTop:hp('0.5%')
    },
    month:{
      color: '#808080',
      fontFamily: 'Rubik-Medium',
      fontSize: hp('2%'),
      marginTop:hp('1%')
        
    
    },
    description:{
     width:wp('75%'),
     height:hp('10%'),
     alignItems:"center"
      
    },
    paragraph:{
        marginTop:hp('1%'),
      color:"#808080",
      fontSize:12,
      fontFamily: 'Rubik-Regular',

    },
    button: {
      width: wp('30%'), // 80% of width device screen}
      height: hp('5%'),
      backgroundColor: '#00C8BC',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    Monthlyplan:{
        color: '#434343',
        fontFamily: 'Rubik-Medium',
        fontSize: hp('2%'),
        //marginLeft:wp('4%'),
        marginTop:wp('2%')
    },
    Month:{
        color: '#00C8BC',
        fontFamily: 'Rubik-Medium',
        fontSize: hp('2%'),
        marginLeft:wp('24%'),
        marginTop:wp('2%')
    },
    Month1:{
        color: '#00C8BC',
        fontFamily: 'Rubik-Medium',
        fontSize: hp('2%'),
        marginLeft:wp('33%'),
        marginTop:wp('2%')
    },
    Month2:{
        color: '#00C8BC',
        fontFamily: 'Rubik-Medium',
        fontSize: hp('2%'),
        marginLeft:wp('36%'),
        marginTop:wp('2%')
    },
    subscibe:{
        color:"#ffffff",
        fontSize:13,
      fontFamily: 'Rubik-Regular',


    }


})
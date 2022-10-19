import { StyleSheet, Text, View,StatusBar,TouchableOpacity,Image,FlatList,ScrollView } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const DATA = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
];

export default function HomeScreen({navigation}) {
  const renderItem = ({item}) => (
    <View style={{alignItems:"center"}}>
    <View style={styles.Box}>
     <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={()=>{navigation.navigate('TradeName')}} >
     <Text style={styles.trade}>Trade name</Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Image
       style={styles.copy}
       source={require('../assets/images/copy.png')}
       resizeMode="contain"
     />
     </TouchableOpacity>
     <TouchableOpacity style={styles.activebutton}>
     <Text style={styles.active}>Active</Text>
     </TouchableOpacity>
     </View>
  
     <View style={{flexDirection:"row",alignItems:"center"}}>
     <Text style={styles.buy}>Buy</Text>
     <Text style={styles.datetime}>(02/02/2022,2:00 pm)</Text>
     <Text style={styles.dollors}>$123</Text>
     </View>
  
     <View style={{flexDirection:"row",alignItems:"center"}}>
     <Text style={styles.price}>Current price:</Text>
     <Text style={styles.aprice}>$110</Text>
     <Text style={styles.dropdown}>45%</Text>
     </View>
  
  
    </View>
    </View>
  );
  return (
    <View style={styles.Container} >
      <StatusBar backgroundColor="#434343" barStyle={'light-content'} />
      <ScrollView>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <Text style={styles.home}>Home</Text>
        <Image
          style={styles.image}
          source={require('../assets/images/bell.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.userimage}
          source={require('../assets/images/userimage.png')}
          resizeMode="contain"
        />
      </View>
     
     <View style={styles.form}>
     <View style={{alignItems:"center"}}>
      <View style={styles.card}>
        <View style={{flexDirection:"row"}}>
        <View>
        <Text style={styles.mybalance}>My Balance</Text>
        <Text style={styles.amount}>2,333 NOK</Text>
        </View>
        <View>
         
        </View>
        
        <Image
          style={styles.mask}
          source={require('../assets/images/mask.png')}
          resizeMode="stretch"
        />
        
        </View>
        <View style={{flexDirection:"row"}}>
        <Image
          style={styles.up}
          source={require('../assets/images/up.png')}
          resizeMode="contain"
        />
        <Text style={styles.balance}>$233</Text>
        <TouchableOpacity style={styles.percentageView}>
        <Text style={styles.percent}>60%</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
       <Text style={styles.trading}>Trading Market</Text>
       <View style={{alignItems: 'center',justifyContent:"center"}}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
      </View>
 </ScrollView>
      </View>

  
  )
}

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: '#434343',
  },
  home:{
    fontSize: hp('2.5%'),
    fontFamily: 'Rubik-Medium',
    color: '#ffffff',
    // marginTop:hp('1%'),
    // marginLeft:wp('2%')
  },
  image: {
    height: hp('6%'), // 70% of height device screen
    width: wp('6%'), // 80% of width device screen}
    marginLeft:wp('45%')
  },
  mask: {
    height: hp('18%'), // 70% of height device screen
    width: wp('45%'), // 80% of width device screen}
    marginLeft:wp('3.6%')
  },
  up:{
    height: hp('6%'), // 70% of height device screen
    width: wp('6%'), // 80% of width device screen
    marginTop:hp('-5.8%'),
    marginLeft:wp('4%'),


  },
  copy:{
    height: hp('5%'), // 70% of height device screen
    width: wp('5%'), // 80% of width device screen
    marginTop:hp('0.5%'),
    marginLeft:wp('3%'),


  },
  userimage: {
    height: hp('11%'), // 70% of height device screen
    width: wp('11%'), // 80% of width device screen}
    marginLeft:wp('4%')
  },
  card:{
    backgroundColor:"#00C8BC",
    height:hp('19%'),
    width:wp('85%'),
    marginTop:hp('-14%'),
   borderRadius:15
  
  
  },
  mybalance:{
    fontSize: hp('2.2%'),
    fontFamily: 'Rubik-Regular',
    color: '#434343',
    marginTop:hp('2%'),
    marginLeft:wp('4%'),

  },
  amount:{
    fontSize: hp('3%'),
    fontFamily: 'Rubik-Medium',
    color: '#434343',
    marginTop:hp('3%'),
    marginLeft:wp('4%'),
  },
  balance:{
    fontSize: hp('2.2%'),
    fontFamily: 'Rubik-Regular',
    color: '#434343',
    marginTop:hp('-4.4%'),
    marginLeft:wp('2%'),

  },
  trade:{
    fontSize: hp('2.2%'),
    fontFamily: 'Rubik-Medium',
    color: '#434343',
    marginTop:hp('1.5%'),
    marginLeft:wp('5%'),

  },


  form:{
    backgroundColor:"#ffffff",
    height:hp('95%'),
    width:wp('100%'),
    marginTop:hp('16%'),
    borderTopRightRadius:35,
    borderTopLeftRadius:35
  
  
  },
  percentageView:{
    height:hp('4%'),
    width:wp('18%'),
    backgroundColor:"#434343",
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center",
    marginTop:hp('-4.8%'),
    marginLeft:wp('39%'),

  },
  percent:{
    color:"#00C8BC",
    fontSize: hp('2%'),
    fontFamily: 'Rubik-Regular',

  },
  trading:{
    color:"#434343",
    fontSize: hp('2.5%'),
    fontFamily: 'Rubik-Medium',
    marginTop:hp('2.5%'),
    marginLeft:wp('6%'),
  },
  Box:{
  height: hp('18%'), // 70% of height device screen
  width: wp('87%'), // 80% of width device screen}
  borderColor:"#434343",
  borderWidth:1,
  borderRadius:17,
  marginTop:hp('3%'),
 // alignItems:"center"

},
activebutton:{
  height:hp('4%'),
  width:wp('18%'),
  backgroundColor:"#00C8BC",
  //borderRadius:8,
  alignItems:"center",
  justifyContent:"center",
  //marginTop:hp('-4.8%'),
  marginLeft:wp('29%'),
  borderTopRightRadius:17


},
active:{
  color:"#FFFFFF",
  fontSize: hp('1.7%'),
  fontFamily: 'Rubik-Regular',



},
buy:{
  color:"#00C8BC",
  fontSize: hp('2%'),
  fontFamily: 'Rubik-Regular',
  marginLeft:wp('5%'),
  marginTop:hp('2%'),


},
aprice:{
  color:"#00C8BC",
  fontSize: hp('2%'),
  fontFamily: 'Rubik-Regular',
  marginLeft:wp('2%'),
  marginTop:hp('2%'),


},
dropdown:{
  color:"#ff0000",
  fontSize: hp('2%'),
  fontFamily: 'Rubik-Regular',
  marginLeft:wp('28%'),
  marginTop:hp('2%'),


},
datetime:{
  color:"#434343",
  fontSize: hp('2%'),
  fontFamily: 'Rubik-Regular',
  marginLeft:wp('2%'),
  marginTop:hp('2%'),


},
price:{
  color:"#434343",
  fontSize: hp('2%'),
  fontFamily: 'Rubik-Regular',
  marginLeft:wp('5%'),
  marginTop:hp('2%'),


},
dollors:{
  color:"#00C8BC",
  fontSize: hp('2%'),
  fontFamily: 'Rubik-Medium',
  marginLeft:wp('11%'),
  marginTop:hp('2%'),



}
  
})
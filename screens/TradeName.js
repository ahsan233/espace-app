import { StyleSheet, Text, View,StatusBar,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  

export default function TradeName({navigation}) {
  return (
    <View style={styles.Container}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#434343" barStyle={'light-content'} />
    <View style={styles.backView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Image
          style={styles.back}
          source={require('../assets/images/wback.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.create}>Trade Name</Text>
    </View>
    <View style={styles.form}>
     
     
        <View style={{flexDirection:"row"}}>
        <Image
          style={styles.userimage}
          source={require('../assets/images/userimage.png')}
          resizeMode="contain"
        />
         <Text style={styles.TraderName}>Trader Name</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={styles.Buy}>Buy</Text>
            <Text style={styles.datetime}>(02/02/2022,2:00 pm)</Text>
     <Text style={styles.dollors}>$123</Text>
        </View>

        <View style={{alignItems:"center"}}>
        <View style={styles.Box}>
        <Image
           style={styles.graph}
          source={require('../assets/images/graph.png')}
          resizeMode="stretch"
        />
        </View>
        </View>

        <View style={{flexDirection:"row",justifyContent:"center"}}> 
            <TouchableOpacity>
            <Text style={styles.day}>Day 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.day}>Day 2</Text>
            
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.day}>Day 3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.day}>Day 4</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.day}>Day 5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.day}>Day 6</Text>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:"center"}}>
        <View style={{width:wp('85%'),borderWidth:0.5,borderColor:'#808080',marginTop:hp('1%')}}></View>
        </View>
       <View>
       <Text style={styles.profit}>Take Profit</Text>
       </View>
       <View style={{flexDirection:"row"}}>
       <Text style={styles.pieces}>10 Pieces</Text>
       <Text style={styles.amount}>2,500 NOK</Text>
       </View>
       <View style={{flexDirection:"row"}}>
       <Text style={styles.pieces}>20 Pieces</Text>
       <Text style={styles.amount}>5,000 NOK</Text>
       </View>
       <View style={{flexDirection:"row"}}>
       <Text style={styles.pieces}>30 Pieces</Text>
       <Text style={styles.amount}>12,500 NOK</Text>
       </View>

       <View style={{flexDirection:"row"}}>
       <Text style={styles.pieces1}>3 months in a row with 20 sales</Text>
      
       <Text style={styles.amount1}>25% Commisions per sale for next month</Text>
       </View>
       <View style={{flexDirection:"row"}}>
       <Text style={styles.pieces1}>3 months in a row with 30 sales</Text>
      
       <Text style={styles.amount1}>30% Commisions per sale for next month</Text>
       </View>

       <View style={{alignItems:"center"}}>
        <View style={{width:wp('90%'),borderWidth:0.4,borderColor:'#808080',marginTop:hp('2%')}}></View>
        </View>
        <View>
            <Text style={styles.Disclaimer}>Disclaimer</Text>
            <Text style={styles.paragraph}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum</Text>
        </View>
        <View style={{alignItems:"center",marginTop:hp('3%')}}>
            <TouchableOpacity style={styles.button}>
                <TouchableOpacity>
                <Text style={styles.share}>Share</Text>
                </TouchableOpacity>
                <View style={{width:wp('8%'),}}></View>
                <Text style={styles.share}> |</Text>
                <View style={{width:wp('8%'),}}></View>
                <TouchableOpacity>
                <Text style={styles.share}>Copy</Text>
                </TouchableOpacity>
            </TouchableOpacity>
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
      height:hp('130%'),
      width:wp('100%'),
      marginTop:hp('2%'),
      borderTopRightRadius:30,
      borderTopLeftRadius:30
    
    
    },
    userimage: {
        height: hp('11%'), // 70% of height device screen
        width: wp('11%'), // 80% of width device screen}
        marginLeft:wp('4%')
      },
      TraderName:{
        fontSize: hp('2.2%'),
    fontFamily: 'Rubik-Medium',
    color: '#434343',
    marginTop:hp('4%'),
    marginLeft:wp('4%'),


      },
      Buy:{
        fontSize: hp('2.2%'),
    fontFamily: 'Rubik-Medium',
    color: '#434343',
    marginTop:hp('4%'),
    marginLeft:wp('5%'),


      },
      Disclaimer:{
        fontSize: hp('2.2%'),
    fontFamily: 'Rubik-Medium',
    color: '#434343',
    marginTop:hp('3%'),
    marginLeft:wp('5%'),


      },
      paragraph:{
        fontSize: hp('1.5%'),
    fontFamily: 'Rubik-Regular',
    color: '#434343',
    marginTop:hp('3%'),
    marginLeft:wp('5%'),
    width:wp('85%')

      },
      profit:{
        fontSize: hp('2.2%'),
    fontFamily: 'Rubik-Medium',
    color: '#434343',
    marginTop:hp('2%'),
    marginLeft:wp('5%'),


      },
      pieces:{
        fontSize: hp('1.8%'),
    fontFamily: 'Rubik-Medium',
    color: '#434343',
    marginTop:hp('2%'),
    marginLeft:wp('5%'),


      },
      pieces1:{
        fontSize: hp('1.8%'),
    fontFamily: 'Rubik-Medium',
    color: '#434343',
    marginTop:hp('2%'),
    marginLeft:wp('5%'),
    width:wp('34%')

      },
      amount:{
        fontSize: hp('1.8%'),
    fontFamily: 'Rubik-Regular',
    color: '#808080',
    marginTop:hp('2%'),
    marginLeft:wp('50%'),


      },
      amount1:{
        fontSize: hp('1.8%'),
    fontFamily: 'Rubik-Regular',
    color: '#808080',
    marginTop:hp('2%'),
    marginLeft:wp('18%'),
    width:wp('40%')


      },
      datetime:{
        color:"#434343",
        fontSize: hp('1.8%'),
        fontFamily: 'Rubik-Regular',
        marginLeft:wp('2%'),
        marginTop:hp('4.5%'),
      
      
      },
      dollors:{
        color:"#00C8BC",
        fontSize: hp('2.5%'),
        fontFamily: 'Rubik-Medium',
        marginLeft:wp('21%'),
        marginTop:hp('4.5%'),
      
      
      
      },
      Box:{
        height: hp('25%'), // 70% of height device screen
        width: wp('85%'), // 80% of width device screen}
        borderColor:"#434343",
        borderWidth:1,
        borderRadius:17,
        marginTop:hp('3%'),
        alignItems:"center"

      },
      graph:{
        height: hp('25%'), // 70% of height device screen
        width: wp('85%'), // 80% of width device screen}
       

      },
      day:{

        fontSize:hp('1.7%'),
        fontFamily: 'Rubik-Medium',
        marginLeft:wp('3.5%'),
        marginTop:hp('2.5%'),
        color:"#434343"
      },
      button:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#434343",
        width:wp('80%'),
        height:hp('8%'),
        borderRadius:17,
        flexDirection:"row"


      },
      share:{
        color:"#00C8BC",
        fontSize: hp('2.8%'),
        fontFamily: 'Rubik-Regular',
        
      }
        
})
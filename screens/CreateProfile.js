import { StyleSheet, Text, View,StatusBar,TouchableOpacity,Image,TextInput , Modal} from 'react-native'
import React,{useState} from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
export default function CreateProfile({navigation}) {
 const [camerapicker, setcamerapicker] = useState(false)
   
 
 const onPressHandler = () => {
   
    setcamerapicker(true);
  };
  const onPressHandler1 = () => {
   
    setcamerapicker(false);
  };
  return (
    <View style={styles.Container}>

<Modal
        visible={camerapicker}
        transparent
        onRequestClose={() => setcamerapicker(false)}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_View}>
          <View style={styles.Picker_Modal}>
            <View style={styles.Modal_body}>
                <View style={{flexDirection:"row"}}>
                <Text style={styles.upload}>Upload Image</Text>
                <TouchableOpacity onPress={onPressHandler1}>
                <Text style={styles.close}>X</Text>
                </TouchableOpacity>

                </View>
           
                <TouchableOpacity>
                <View style={{flexDirection:"row"}}>
            <Image
         style={styles. imagepicker}
          source={require('../assets/images/iamgepicker.png')}
          resizeMode="contain"
        />
        <Text style={styles.uploadgallery}>Upload from Gallery</Text>
         </View>
         </TouchableOpacity>
         <View style={{alignItems:"center"}}>
         <View style={{borderWidth:hp('0.1%'),borderColor:"#dcdcdc",width:wp('90%'),}}></View>
         </View>
         <TouchableOpacity>
         <View style={{flexDirection:'row'}}>
            
         <Image
         style={styles.camerapicker}
          source={require('../assets/images/camerapicker.png')}
          resizeMode="contain"
        />
        
         <Text style={styles.uploadcamera}>Upload from Camera</Text>

         </View>
         </TouchableOpacity>
               
           </View>
          </View>
        </View>
      </Modal>
    <StatusBar backgroundColor="#434343" barStyle={'light-content'} />
    <View style={styles.backView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <Image
          style={styles.back}
          source={require('../assets/images/wback.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.create}>Create Profile</Text>
    </View>
    <View style={styles.form}>
        <View style={styles.formView}>
     <View style={styles.imageContainer}>
     <Image
         style={styles.camera}
          source={require('../assets/images/user.png')}
          resizeMode="contain"
        />

     </View>
     <View style={styles.picker}>
        <TouchableOpacity  onPress={onPressHandler}>
     <Image
         style={styles.camera}
          source={require('../assets/images/camera.png')}
          resizeMode="contain"
        />
        </TouchableOpacity>
     </View>
     </View>

     <View style={{alignItems: 'center'}}>
        <View style={styles.TextInput}>
          <View style={{marginLeft: 10}}>
            <Image
              style={styles.person}
              source={require('../assets/images/person.png')}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="Enter username"
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.TextInput}>
          <View style={{marginLeft: 10}}>
            <Image
              style={styles.person}
              source={require('../assets/images/link.png')}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={styles.TextinputStyle}
            placeholder="Enter refferal link"
          />
        </View>


      </View>
      <View style={{alignItems: 'center', marginTop: 200}}>
        <TouchableOpacity  onPress={() => {
              navigation.navigate("SubscriptionPlans");
            }}style={styles.button}>
          <Text style={styles.next}>Next</Text>
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
    imageContainer:{
        borderColor: '#434343',
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center",
        width:wp('30%'),
        height:hp('15%'),
        borderWidth:1,
        


    },
    formView:{
        alignItems:"center",
        marginTop:hp('5%')
    },

    picker:{
        marginTop:hp('-8%'),
        marginLeft:wp('20%')
    },
    camera:{
        height: hp('12%'), // 70% of height device screen
        width: wp('12%'), // 80% of width device screen

    },
    imagepicker:{
        height: hp('8%'), // 70% of height device screen
        width: wp('8%'), // 80% of width device screen
       marginLeft:wp('5%'),
       marginTop:hp('2%')
    },
    camerapicker:{
        height: hp('8%'), // 70% of height device screen
        width: wp('8%'), // 80% of width device screen
       marginLeft:wp('5%'),
      // marginTop:hp('2%')
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
      person: {
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
      next: {
        color: '#ffffff',
        fontFamily: 'Rubik-Medium',
        fontSize: hp('2.5%'),
      },
      centered_View: {
        flex: 1,
        //backgroundColor: '#00000099',
       marginTop:hp('70%')
      },
      Picker_Modal: {
        width:wp('100%'),
        height:hp('30%'),
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        elevation: 3,
      },
      Modal_body: {
        // height: 170,
        // justifyContent: 'center',
        // alignItems: 'center',
      },
  upload:{
    color: '#434343',
        fontFamily: 'Rubik-Regular',
        fontSize: hp('2%'),
        padding:'2.3%',
        marginLeft:wp('2%')
  },
  close:{
    color: '#434343',
        fontFamily: 'Rubik-Medium',
        fontSize: hp('2%'),
        padding:'2.3%',
        marginLeft:wp('55%')
  },
  uploadcamera:{
    color: '#434343',
        fontFamily: 'Rubik-Regular',
        fontSize: hp('2%'),
        marginLeft:wp('3%'),
       marginTop:hp('3%')
      },
      uploadgallery:{
        color: '#434343',
            fontFamily: 'Rubik-Regular',
            fontSize: hp('2%'),
            marginLeft:wp('3%'),
            marginTop:hp('4.5%')
          },
      
  
})
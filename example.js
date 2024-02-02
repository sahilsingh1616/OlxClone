import { Image, StyleSheet, Text, View,TouchableOpacity,FlatList,Dimensions, requireNativeComponent } from 'react-native'
import React, { useEffect, useState } from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Settings } from '../utils/Mocks';
import { useNavigation } from '@react-navigation/native';
const {width,height}=Dimensions.get('screen');

const Logo = require('../../assets/images/gallery1.png');

const User = ({navigation}) => {
  
  const [photo,setPhoto]=useState({"assets": [{"fileName": "", "fileSize": 697365, "height": 2400, "uri": "", "width": 1080}]});

  const OpenGallery=async()=>{
    const result=await launchImageLibrary({mediaType:'photo'});
    if(!result.didCancel){
      setPhoto(result)
    }
   

  }
  return (
    <View style={styles.container}>
    <View style={styles.OlxView}>
<Image source={require('../../assets/images/olx.png')} style={{width:100,height:50}}/>
<Text style={styles.CloneTxt}>Clone</Text>
    </View>

<View style={{flexDirection:'row',width:'100%',marginTop:70,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={()=>OpenGallery()} style={styles.imageView}>
      {
        photo.assets[0].uri==''?( <Image source={Logo} style={styles.imageicon} />):( <Image source={{uri:photo.assets[0].uri}} style={styles.imageicon} />)}   
       
      </TouchableOpacity>
      <Text style={styles.Sahiltxt}>Sahil Singh</Text>
      </View>

      <View style={{marginTop:20}}>
                   <View style={styles.mainView}>
                   <View style={{flexDirection:'row',marginLeft:10}}>
             <Image source={Settings[0].image} style={styles.settingicon}/>

             <View style={{marginLeft:10}}>
               <Text style={{fontSize:14,color:'black'}}>{Settings[0].title}</Text> 
                             <Text style={{fontSize:14,color:'black'}}>{Settings[0].downtxt}</Text>

             </View>

             </View>

             <TouchableOpacity onPress={()=>navigation.navigate('SettingPage')}>
                     <Image source={require('../../assets/images/greater.png')} style={styles.greatericon}/>
                      </TouchableOpacity>
</View>
     
      </View>

      <View style={{}}>
                   <View style={styles.mainView}>
                   <View style={{flexDirection:'row',marginLeft:10}}>
             <Image source={Settings[1].image} style={styles.settingicon}/>

             <View style={{marginLeft:10}}>
               <Text style={{fontSize:14,color:'black'}}>{Settings[1].title}</Text> 
                             <Text style={{fontSize:14,color:'black'}}>{Settings[1].downtxt}</Text>

             </View>

             </View>

             <TouchableOpacity onPress={()=>navigation.navigate('SettingPage')}>
                     <Image source={require('../../assets/images/greater.png')} style={styles.greatericon}/>
                      </TouchableOpacity>
</View>
     
      </View>
      <View style={{}}>
                   <View style={styles.mainView}>
                   <View style={{flexDirection:'row',marginLeft:10}}>
             <Image source={Settings[2].image} style={styles.settingicon}/>

             <View style={{marginLeft:10}}>
               <Text style={{fontSize:14,color:'black'}}>{Settings[2].title}</Text> 
                             <Text style={{fontSize:14,color:'black'}}>{Settings[2].downtxt}</Text>

             </View>

             </View>

             <TouchableOpacity onPress={()=>navigation.navigate('SettingPage')}>
                     <Image source={require('../../assets/images/greater.png')} style={styles.greatericon}/>
                      </TouchableOpacity>
</View>
     
      </View>
      <View style={{}}>
                   <View style={styles.mainView}>
                   <View style={{flexDirection:'row',marginLeft:10}}>
             <Image source={Settings[3].image} style={styles.settingicon}/>

             <View style={{marginLeft:10}}>
               <Text style={{fontSize:14,color:'black'}}>{Settings[3].title}</Text> 
                             <Text style={{fontSize:14,color:'black'}}>{Settings[3].downtxt}</Text>

             </View>

             </View>

             <TouchableOpacity onPress={()=>navigation.navigate('SettingPage')}>
                     <Image source={require('../../assets/images/greater.png')} style={styles.greatericon}/>
                      </TouchableOpacity>
</View>
     
      </View>
      <View style={{}}>
                   <View style={styles.mainView}>
                   <View style={{flexDirection:'row',marginLeft:10}}>
             <Image source={Settings[4].image} style={styles.settingicon}/>

             <View style={{marginLeft:10}}>
               <Text style={{fontSize:14,color:'black'}}>{Settings[4].title}</Text> 
                             <Text style={{fontSize:14,color:'black'}}>{Settings[4].downtxt}</Text>

             </View>

             </View>

             <TouchableOpacity onPress={()=>navigation.navigate('SettingPage')}>
                     <Image source={require('../../assets/images/greater.png')} style={styles.greatericon}/>
                      </TouchableOpacity>
</View>
     
      </View>

      <View>
        <Text style={styles.versiontxt}>{'Latest Verision 2.2.111'}</Text>
      </View>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container:{flex:1},
  title:{fontSize:32,color:'black',fontWeight:'800'},
  OlxView:{
    marginTop:15,
    marginLeft:20,
    flexDirection:'row',
    alignItems:'center'
  },
  imageView: {
    //width: '90%',
    //alignSelf: 'center',
    flexDirection:'row'
  
  },
  imageicon:{
    width:90,height:90,marginRight:30,borderRadius:20
  },
  CloneTxt:{
    fontSize:15,fontWeight:'800',color:'black',marginLeft:5,top:14
  },
  imageView:{
    flexDirection:'row',width:'100%',marginTop:70,justifyContent:'center',alignItems:'center'
  },
  Sahiltxt:{
    fontSize:22,fontWeight:'700',color:'black',marginRight:140
  },
  mainView:{
    width:'95%',height:70,borderRadius:10,backgroundColor:'white',elevation:3,borderWidth:.5,margin:3,alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'
  },
  settingicon:{
    width:30,height:30
  },
  greatericon:{
    width:20,height:20,marginRight:20
  },
  versiontxt:{
  fontSize:11,color:'grey',textAlign:'center',marginTop:6
  }


})



// <FlatList
// data={Settings}
// renderItem={({ item, index }) => {
//                   return (
                   
//               <View style={{width:'95%',height:70,borderRadius:10,backgroundColor:'white',elevation:3,borderWidth:.5,margin:3,alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
//               <View style={{flexDirection:'row',marginLeft:10}}>
//               <Image source={item.image} style={{width:30,height:30}}/>
//               <View style={{marginLeft:10}}>
//               <Text style={{fontSize:14,color:'black'}}>{item.title}</Text>
//               <Text style={{fontSize:14,color:'black'}}>{item.downtxt}</Text>

//               </View>
//               </View>
//               <TouchableOpacity onPress={()=>navigation.navigate('SettingPage',{sahil:item})}>
//                      <Image source={require('../../assets/images/greater.png')} style={{width:20,height:20,marginRight:20}}/>
//                      </TouchableOpacity>
//               </View>
                  
//                   onPress={()=>navigation.navigate('Competitionaroundyou',{ abhi: item })}
//                   )

// }}
// />
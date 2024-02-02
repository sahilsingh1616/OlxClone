import { StyleSheet, ScrollView,Text, View, TouchableOpacity,Keyboard, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { addPost } from '../redux/PostSlice';
import { useSelector, useDispatch } from 'react-redux'


const Logo = require('../../assets/images/gallery1.png');

const Add = ({onPost,setKeyboardVisible}) => {



  const [name,setName]=useState('');
  const [model,setModel]=useState('');
  const [price,setPrice]=useState(0);

  const [selectedCategory,setSelectedCategory]=useState(0)

  const dispatch=useDispatch();


  const [photo,setPhoto]=useState({"assets": [{"fileName": "", "fileSize": 697365, "height": 2400, "uri": "", "width": 1080}]});

  const OpenGallery=async()=>{
    const result=await launchImageLibrary({mediaType:'photo'});
    if(!result.didCancel){
      setPhoto(result)
    }
   

  }

  const addItems=()=>{
    dispatch(addPost({name:name,islike:false,model:model,price:price,image:photo.assets[0].uri,category:selectedCategory==0?'Cars':selectedCategory==1?'Bikes':selectedCategory==2?'Laptops':selectedCategory==3?'Mobiles':selectedCategory==4?'Furnitures':'Houses'}))
     onPost();
  }



useEffect(()=>{

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };

  },[])

  return (
  <ScrollView >
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.title}>Add Post</Text>
      </View>

      <TouchableOpacity onPress={()=>OpenGallery()} style={styles.imageView}>
      {
        photo.assets[0].uri==''?( <Image source={Logo} style={styles.imageicon} />):( <Image source={{uri:photo.assets[0].uri}} style={styles.imageicon} />)}   
       
      </TouchableOpacity>

      <TextInput placeholderTextColor='grey' placeholder='Enter Item Name' style={styles.input}  value={name} onChangeText={txt=>setName(txt)}  />
      <TextInput placeholderTextColor='grey' placeholder='Enter Model Name' style={[styles.input, { marginTop: 10 }]} value={model}  onChangeText={txt=>setModel(txt)} />
      <TextInput placeholderTextColor='grey' placeholder='Enter Price' keyboardType='number-pad' style={[styles.input, { marginTop: 10 }]}  value={price} onChangeText={txt=>setPrice(txt)} />
 
           <Text style={[styles.title,{marginLeft:20,marginTop:20}]}>Categories</Text>

           <TouchableOpacity onPress={()=>setSelectedCategory(0)} style={[styles.input,{justifyContent:'center',marginTop:20,borderWidth:3,borderColor:selectedCategory==0?'blue':'black'}]}>
           <Text style={{fontSize:16,color:selectedCategory==0?'black':'#8e8e8e'}}>Car</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>setSelectedCategory(1)} style={[styles.input,{justifyContent:'center',marginTop:10,borderWidth:3,borderColor:selectedCategory==1?'blue':'black'}]}>
           <Text style={{fontSize:16,color:selectedCategory==1?'black':'#8e8e8e'}}>Bike</Text>
           </TouchableOpacity> 

           <TouchableOpacity onPress={()=>setSelectedCategory(2)} style={[styles.input,{justifyContent:'center',marginTop:10,borderWidth:3,borderColor:selectedCategory==2?'blue':'black'}]}>
           <Text style={{fontSize:16,color:selectedCategory==2?'black':'#8e8e8e'}}>Laptop</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>setSelectedCategory(3)} style={[styles.input,{justifyContent:'center',marginTop:10,borderWidth:3,borderColor:selectedCategory==3?'blue':'black'}]}>
           <Text style={{fontSize:16,color:selectedCategory==3?'black':'#8e8e8e'}}>Mobile</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>setSelectedCategory(4)} style={[styles.input,{justifyContent:'center',marginTop:10,borderWidth:3,borderColor:selectedCategory==4?'blue':'black'}]}>
           <Text style={{fontSize:16,color:selectedCategory==4?'black':'#8e8e8e'}}>Furniture</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>setSelectedCategory(5)} style={[styles.input,{justifyContent:'center',marginTop:10,borderWidth:3,borderColor:selectedCategory==5?'blue':'black'}]}>
           <Text style={{fontSize:16,color:selectedCategory==5?'black':'#8e8e8e'}}>House</Text>
           </TouchableOpacity>

        

      <TouchableOpacity onPress={()=>addItems()} style={styles.btn}>
        <Text style={{ fontSize: 22, color: 'white', fontWeight: '800' }}> Get Post</Text>
      </TouchableOpacity>

      

    </View>
    </ScrollView>
  )
}

export default Add

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700'
  },
  imageView: {
    width: '90%',

    alignSelf: 'center',
    marginTop: 16,
    //borderWidth:1

  },

  input: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    paddingLeft: 20,
    color: 'black'
  },
  imageicon: {
    width: 200, height: 200, alignSelf: 'center'
  },

  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#10BCFD',
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom:130
  }
})
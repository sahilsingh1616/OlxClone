import { Dimensions, FlatList,Keyboard, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
const { width, height } = Dimensions.get('screen')
import { Products } from '../utils/Mocks';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { addToWishList } from '../redux/WishListSlice';

const Logo = require('../../assets/images/heartline.png');
const Logo1 = require('../../assets/images/heartblack.png')

const Home = ({setKeyboardVisible}) => {
    const [data, setData]= useState([]);
    const [copyData, setCopyData]= useState([]);

    const navigation = useNavigation();
    const items = useSelector(state => state.post)
    console.log(items)


    useEffect(()=> {
setData(items?.data);
setCopyData(items?.data);
    },[]);

    const handleFav=(item,param)=> {
console.log(param,"66t7577");
const response= data.map((item,index)=> {
    if(index==param){
        return {
            ...item,islike:item.islike==false?true:false
        }
    }else{
        return item;
    }
 
    function removeItem(item) {
        return data.filter((item,index) => data.indexOf(item) === index);
        console.log(removeItem,'___________________________')
    }
    
  

})
console.log(response);
setData(response);
dispatch(addToWishList(item));
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









    const dispatch = useDispatch();



    return (
        <View style={styles.container}>
            <View style={styles.OLXMAPVIEW}>
                <Text style={styles.logo}>OLX clone</Text>

                <View style={styles.MAPANDTXTVIEW}>
                    <Image source={require('../../assets/images/location.png')} style={styles.icon} />
                    <Text style={{ fontSize: 13, color: 'black' }}>Sector 70, Mohali...</Text>
                </View>
            </View>

            <View style={styles.BackGroundGreyVIEw}>

                <View style={styles.SearchBox}>
                    <Image source={require('../../assets/images/search.png')} style={styles.searchicon} />
                    <TextInput placeholderTextColor='grey' placeholder='Find Cars, Mobile Phones and More....' style={styles.input} maxLength={60} />
                </View>

                <View style={styles.bellView}>
                    <Image source={require('../../assets/images/bell.png')} style={styles.bellicon} />


                </View>

            </View>
            <ScrollView style={{}}>
                <View style={styles.WhatLOOkingView}>
                    <Text style={styles.heading}>What are you looking For...?</Text>
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={Products}
                        numColumns={3}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => { navigation.navigate('ItemsByCategory', { category: item.title }) }} style={styles.ImagesView}>

                                    <Image source={item.image} style={styles.caricon} />
                                    <Text style={styles.cartxt}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />

                </View>

                <View style={{ backgroundColor: '#EFEFEF', marginTop: 10, marginBottom: '33%' }}>
                    <Text style={styles.heading}>Posted Items</Text>
                    <FlatList
                        data={data}

                        renderItem={({ item, index }) => {
                            console.log(item)
                            return (
                                <View style={styles.item}>
                                    <Image source={{ uri: item.image }} style={styles.imageicon} />
                                    <View>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.discription}>{item.model}</Text>
                                        <Text style={styles.price}>{'₹' + item.price}</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => handleFav(item,index)} style={styles.wishlist}>
                                        <Image source={item?.islike==false ? Logo : Logo1} style={styles.icon} />

                                    </TouchableOpacity>

                                </View>
                            )
                        }}
                    />

                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: { flex: 1 },
    logo: {
        fontSize: 40,
        color: 'black',
        fontWeight: '900',
        marginLeft: '5%'

    },
    OLXMAPVIEW: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10
    },
    MAPANDTXTVIEW: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: '5%'
    },
    SearchBox: {
        width: '80%',
        height: 50,
        //backgroundColor:'blue',
        borderWidth: 1,

        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        fontSize: 15,
        color: 'black',
        padding: 10
    },
    BackGroundGreyVIEw: {
        width: '100%', height: 70, backgroundColor: '#EFEFEF', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    },
    searchicon: {
        width: 20, height: 20, marginLeft: 10
    },
    bellView: {
        width: 50, height: 50, borderWidth: 1, borderRadius: 10, marginLeft: 10, justifyContent: 'center', alignItems: "center"
    },
    bellicon: { width: 30, height: 30 },

    WhatLOOkingView: {
        width: '95%',
        height: 270,
        backgroundColor: 'white',
        elevation: 3,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 5,

    },
    heading: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 20
    },
    ImagesView: {
        width: width / 3.3, height: 100, alignItems: 'center', borderRadius: 10, justifyContent: 'center', backgroundColor: '#DEDEDEF8', margin: 2
    },
    caricon: {
        width: 60, height: 60
    },
    cartxt: { fontSize: 14, color: 'black', fontWeight: '500', marginTop: 4 },
    item: {
        width: '90%',
        height: 100,
        backgroundColor: '#fff',
        marginTop: 5,
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    imageicon: {
        width: 70,
        height: 70,
        marginLeft: 10,
        marginTop: 15
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 10,
        color: 'black'
    },
    discription: {
        fontSize: 16,

        marginLeft: 10,
        color: 'black'
    },
    price: {
        fontSize: 16,
        marginLeft: 10,
        color: 'blue'
    },
    wishlist: {
        position: 'absolute',
        right: '14%',
        top: 40
    }

})
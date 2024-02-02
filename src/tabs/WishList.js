import { StyleSheet, Text,ScrollView, View, Dimensions, FlatList, TouchableOpacity, Image,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { Products } from '../utils/Mocks'
import { deletecart } from '../redux/WishListSlice'
const { width, height } = Dimensions.get('screen')



const WishList = () => {
  const dispatch = useDispatch();
  const items=useSelector(state=>state.wishlist);




 



    return (
        <View style={styles.container}>


                <ScrollView>
<View style={{marginTop:10,marginBottom:120}}>
            <FlatList
              
                data={items.data}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.item}>
                            <Image source={{ uri: item.image }} style={styles.imageicon} />
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.discription}>{item.model}</Text>
                                <Text style={styles.price}>{'₹' + item.price}</Text>
                            </View>

                            <TouchableOpacity onPress={()=>dispatch(deletecart(item))} style={styles.wishlist}>
                            <Image source={require('../../assets/images/trash.png')} style={styles.icon}/>

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

export default WishList

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    }, item: {
        width: '90%',
        height: 100,
        backgroundColor: '#fff',
        marginTop: 5,
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    SearchBox: {
      width: '86%',
      height: 50,
      //backgroundColor:'blue',
      borderWidth: 1,

      borderRadius: 10,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',marginTop:20
  },
  input: {
      width: '80%',
      fontSize: 15,
      color: 'black',
      padding: 10
  },

  searchicon: {
    width: 20, height: 20, marginLeft: 10
  },
  wishlist:{
    position:'absolute',
    right:'14%',
    top:40
},
icon: {
  width: 20,
  height: 20,
  marginRight: '5%'}
})
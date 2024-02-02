import { StyleSheet, Text,ScrollView, View, Dimensions,Keyboard, FlatList, TouchableOpacity, Image,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { Products } from '../utils/Mocks'
const { width, height } = Dimensions.get('screen')



const Search = ({setKeyboardVisible}) => {
  const items=useSelector(state=>state.post);

  const [text,setText]=useState('');
  const[itemList,setItemList]=useState(items.data)

  const filterList=(txt)=>{
let tempData=items.data;
let temp= tempData.filter(items=>{
  return items.name.toLowerCase().match(txt.toLowerCase());
});
setItemList(temp)
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
        <View style={styles.container}>

<View style={styles.SearchBox}>
                    <Image source={require('../../assets/images/search.png')} style={styles.searchicon} />
                    <TextInput placeholderTextColor='grey' placeholder='Find Cars, Mobile Phones and More....' style={styles.input} maxLength={60} value={text} onChangeText={txt=>{setText(txt) ,filterList(txt)}} />
                </View>
                <ScrollView>
<View style={{marginTop:10,marginBottom:120}}>
            <FlatList
              
                data={itemList}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.item}>
                            <Image source={{ uri: item.image }} style={styles.imageicon} />
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.discription}>{item.model}</Text>
                                <Text style={styles.price}>{'₹' + item.price}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                }}
            />

</View>
</ScrollView>
        </View>
    )
}

export default Search

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
  }
})
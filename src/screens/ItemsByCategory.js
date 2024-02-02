import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { Products } from '../utils/Mocks'
const { width, height } = Dimensions.get('screen')



const ItemsByCategory = () => {
    const [itemList, setItemList] = useState([])
    const route = useRoute();
    console.log(route, "route");
    const items = useSelector(state => state.post)
    console.log(items, "items");
    useEffect(() => {
        let tempWork = items.data
        let temp = []
        tempWork.map(item => {
            if (item.category == route.params.category) {
                temp.push(item)
            }
        });
        setItemList(temp)

    }, [])
    return (
        <View style={styles.container}>

            <FlatList
                style={{ marginTop: 20 }}
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
    )
}

export default ItemsByCategory

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

})
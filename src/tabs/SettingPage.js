import { FlatList, Image, StyleSheet,Dimensions ,Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DATA } from '../utils/Mocks'
const {width,height}=Dimensions.get('screen');

const SettingPage = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 70, backgroundColor: 'white', borderWidth: .3, borderColor: '#8e8e8e', justifyContent: 'space-between' }}>
        <View style={{ marginTop: 20, flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/back.png')} style={{ width: 30, height: 20, marginLeft: 20 }} />
          </TouchableOpacity>

          <Text style={{ fontSize: 22, color: 'black', width: '80%', fontWeight: '500', height: 50, textAlign: 'center' }}>{route.params.Sahil.heading}</Text>

        </View>
      </View>

      <View>
        <FlatList
          data={route.params.Sahil.list}

          renderItem={({ item, index }) => {
            console.log(item)
            return (
              <View style={{ width: '100%', height: 60, borderColor: '#8e8e8e', alignSelf: 'center', borderTopWidth: 1,justifyContent:'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                  <View>
                    <Text style={{ marginTop: 1, fontSize: 18, color: 'black', fontWeight: '500', marginLeft: 10 }}>{item.text}</Text>
                    <Text style={{ marginTop: 1, fontSize: 12, color: '#8e8e8e', fontWeight: '500', marginLeft: 10 }}>{item.downtxt}</Text>

                  </View>
                  <View style={{justifyContent:'center'}}>
                  <Image source={item.image} style={styles.greatericon} />
                  </View>

                </View>


              </View>


            )
          }}

        />
      </View>

      <View style={{height:height/6,justifyContent:'center'}}>
      <Text style={{ fontSize: 11, color: 'grey', textAlign: 'center', marginTop:'30%' }}>{'Latest Verision 2.2.111'}</Text>

      </View>


    </View>
  )
}

export default SettingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greatericon: {
    width: 20, height: 20, marginRight: 20
  },
})
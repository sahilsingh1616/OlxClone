import { StyleSheet, Text, View, Dimensions,Image } from 'react-native'
import React,{useEffect} from 'react'
const { width, height } = Dimensions.get('screen')

const Splash = ({navigation}) => {
  useEffect(()=>{
setTimeout(()=>{
  navigation.navigate('Main');
},3000)
  },[])
  return (
    <View style={{ flex: 1, backgroundColor: '#848484' }}>

      <View style={styles.container}>
      <View style={styles.OlxView}>
<Image source={require('../../assets/images/olx.png')} style={{width:220,height:120}}/>
</View>
        <Text style={styles.india}>India</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.market}>India's Leading MarketPlace</Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#848484', justifyContent: 'center', alignItems: 'center', height: height / 1.2
  },
  logo: {
    fontSize: 100,
    color: 'white',
    fontWeight: '800'
  },
  india: {
    fontSize: 40,
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    marginTop:10,
    fontStyle:'italic'
  },
  market: {
    fontSize: 15,
    color: 'white'
  }
})
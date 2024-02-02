import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, requireNativeComponent } from 'react-native'
import React, { useEffect, useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { DATA, Settings } from '../utils/Mocks';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen');

const Logo = require('../../assets/images/gallery1.png');

const User = ({ navigation }) => {

  const [photo, setPhoto] = useState({ "assets": [{ "fileName": "", "fileSize": 697365, "height": 2400, "uri": "", "width": 1080 }] });

  const OpenGallery = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (!result.didCancel) {
      setPhoto(result)
    }


  }
  return (
    <View style={styles.container}>
      <View style={styles.OlxView}>
        <Image source={require('../../assets/images/olx.png')} style={{ width: 100, height: 50 }} />
        <Text style={{ fontSize: 15, fontWeight: '800', color: 'black', marginLeft: 5, top: 14 }}>Clone</Text>
      </View>

      <View style={styles.MainImageView}>
        <TouchableOpacity onPress={() => OpenGallery()} style={styles.imageView}>
          {
            photo.assets[0].uri == '' ? (<Image source={Logo} style={styles.imageicon} />) : (<Image source={{ uri: photo.assets[0].uri }} style={styles.imageicon} />)}

        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: '700', color: 'black', marginRight: 140 }}>Sahil Singh</Text>
      </View>

     <View style={{ marginTop: 20 }}>
        <View style={styles.mainView}>
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Image source={Settings[0].image} style={styles.settingicon} />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{Settings[0].title}</Text>
              <Text style={{ fontSize: 14, color: '#8e8e8e' }}>{Settings[0].downtxt}</Text>

            </View>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SettingPage', { Sahil: DATA[0] })}>
            <Image source={require('../../assets/images/greater.png')} style={styles.greatericon} />
          </TouchableOpacity>
        </View>

      </View> 

      <View style={{}}>
        <View style={styles.mainView}>
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Image source={Settings[1].image} style={styles.settingicon} />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{Settings[1].title}</Text>
              <Text style={{ fontSize: 14, color: '#8e8e8e' }}>{Settings[1].downtxt}</Text>

            </View>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SettingPage', { Sahil: DATA[1] })}>
            <Image source={require('../../assets/images/greater.png')} style={styles.greatericon} />
          </TouchableOpacity>
        </View>

      </View>


      <View style={{}}>
        <View style={styles.mainView}>
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Image source={Settings[2].image} style={styles.settingicon} />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{Settings[2].title}</Text>
              <Text style={{ fontSize: 14, color: '#8e8e8e' }}>{Settings[2].downtxt}</Text>

            </View>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SettingPage', { Sahil: DATA[2] })}>

            <Image source={require('../../assets/images/greater.png')} style={styles.greatericon} />
          </TouchableOpacity>
        </View>

      </View>

      <View style={{}}>
        <View style={styles.mainView}>
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Image source={Settings[3].image} style={styles.settingicon} />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{Settings[3].title}</Text>
              <Text style={{ fontSize: 14, color: '#8e8e8e' }}>{Settings[3].downtxt}</Text>

            </View>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SettingPage', { Sahil: DATA[3] })}>
            <Image source={require('../../assets/images/greater.png')} style={styles.greatericon} />
          </TouchableOpacity>
        </View>

      </View>

      <View style={{}}>
        <View style={styles.mainView}>
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Image source={Settings[4].image} style={styles.settingicon} />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{Settings[4].title}</Text>
              <Text style={{ fontSize: 14, color: '#8e8e8e' }}>{Settings[4].downtxt}</Text>

            </View>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SettingPage', { Sahil: DATA[4] })}>
            <Image source={require('../../assets/images/greater.png')} style={styles.greatericon} />
          </TouchableOpacity>
        </View>

      </View>

      <View>
        <Text style={{ fontSize: 11, color: 'grey', textAlign: 'center', marginTop: 6 }}>{'Latest Verision 2.2.111'}</Text>
      </View>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 32, color: 'black', fontWeight: '800' },
  OlxView: {
    marginTop: 15,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageView: {
    //width: '90%',
    //alignSelf: 'center',

  },
  MainImageView: {
    flexDirection: 'row', width: '100%', marginTop: 70, justifyContent: 'center', alignItems: 'center'
  },
  imageicon: {
    width: 90, height: 90, marginRight: 30, borderRadius: 20
  },
  Sahiltxt: {
    fontSize: 22, fontWeight: '700', color: 'black', marginRight: 140
  },
  mainView: {
    width: '95%', height: 70, borderRadius: 10, backgroundColor: 'white', elevation: 3, borderWidth: .5, margin: 3, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  settingicon: {
    width: 30, height: 30
  },
  greatericon: {
    width: 20, height: 20, marginRight: 20
  },
  versiontxt: {
    fontSize: 11, color: 'grey', textAlign: 'center', marginTop: 6
  }
})
// import React, { useState } from 'react';
// import { Text, TextInput, View } from 'react-native';


// const User = () => {
//  const [text, setText] = useState('');
//  return (
//    <View style={{padding: 10}}>
//      <TextInput
//        style={{height: 40,width:'95%',borderWidth:1,alignSelf:'center'}}
//        placeholderTextColor='black'
//        placeholder="Type here to translate!"
//        onChangeText={text => setText(text)}
//        defaultValue={text}
//      />
//      <Text style={{padding: 10, fontSize: 42}}>
//        {text.split(' ').map((word) => word && '🍕').join(' ')}
//      </Text>
//    </View>
//  );
// }

// export default User;


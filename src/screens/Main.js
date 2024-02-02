import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Add from '../tabs/Add';
import WishList from '../tabs/WishList';
import User from '../tabs/User';

const Main = ({navigation}) => {
    const [selectedTab,setSelectedTab]=useState(0);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    console.log(isKeyboardVisible)
  return (
    <View style={styles.container}>
    {
        selectedTab==0?(<Home setKeyboardVisible={setKeyboardVisible}/>):selectedTab==1?(<Search setKeyboardVisible={setKeyboardVisible}/>):selectedTab==2?(<Add setKeyboardVisible={setKeyboardVisible} onPost={()=>setSelectedTab(0)}/>):selectedTab==3?(<WishList/>):(<User navigation={navigation}/>)
    }
    
    {
        isKeyboardVisible ==false&&(<View style={styles.bottomTab}>
    
    <TouchableOpacity onPress={()=>setSelectedTab(0)} style={styles.tab}>
    <Image source={require('../../assets/images/home.png')} style={[styles.icon,{tintColor:selectedTab==0?'black':'grey'}]}/>
    <Text style={{fontSize:12,color:'black',marginTop:5,fontWeight:selectedTab==0?'600':'300'}}>Home</Text>

    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setSelectedTab(1)} style={styles.tab}>
    <Image source={require('../../assets/images/search.png')} style={[styles.icon,{tintColor:selectedTab==1?'black':'grey'}]}/>
    <Text style={{fontSize:12,color:'black',marginTop:5,fontWeight:selectedTab==1?'600':'300'}}>Search</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setSelectedTab(2)} style={styles.tab}>
    <View style={{width:68,height:68,backgroundColor:'white',borderWidth:.4,borderColor:'grey',marginTop:-50,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
    <Image source={require('../../assets/images/addd.png')} style={[styles.icon,{tintColor:selectedTab==2?'black':'grey'}]}/>


</View>
    <Text style={{fontSize:12,color:'black',marginTop:13,fontWeight:selectedTab==2?'600':'300'}}>Add</Text>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>setSelectedTab(3)} style={styles.tab}>
    <Image source={require('../../assets/images/favourite.png')} style={[styles.icon,{tintColor:selectedTab==3?'black':'grey'}]}/>
    <Text style={{fontSize:12,color:'black',marginTop:5,fontWeight:selectedTab==3?'600':'300'}}>WishList</Text>

    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setSelectedTab(4)} style={styles.tab}>
    <Image source={require('../../assets/images/user.png')}style={[styles.icon,{tintColor:selectedTab==4?'black':'grey'}]}/>
    <Text style={{fontSize:12,color:'black',marginTop:5,fontWeight:selectedTab==4?'600':'300'}}>User</Text>

    </TouchableOpacity>

    </View>)
    }
    
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    bottomTab:{
        width:'97%',
        height:70,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#fff',
        position:'absolute',
        bottom:0,
        borderTopLeftRadius:80,
        borderTopRightRadius:80,
        borderBottomLeftRadius:80,
        borderBottomRightRadius:80,
        marginBottom:10,
        alignSelf:'center',
        elevation:2,
        borderWidth:.2,
        borderColor:'black'
       
    
    },
    tab:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:30,
        height:30
    }
})
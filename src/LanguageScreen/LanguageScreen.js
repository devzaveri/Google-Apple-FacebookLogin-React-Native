import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { addLanguageMain } from '../redux/action';
import { setAppLanguage } from '../Theme/Resource/language/i18n';
import RNRestart from 'react-native-restart'


const LanguageScreen = ({navigation}) => {
    const [lang , setlang] = useState('')
    
    const dispatch = useDispatch();

  
    
    const lan = useSelector(state => state.addLanguage);

    useEffect(()=>{
        // if(lan === 'en'){
        //     setlang("English")
            
        // } else {
        //     setlang("Spanish")
        // }
        
    },[lan])
  
    
  function onTapEng()
  {
    setAppLanguage('en')
    // RNRestart.restart();
  }

  function onTapSpanish()
  {
    setAppLanguage('es')
    // RNRestart.Restart()
  }
  
  return (
    <View style={{
        height:'100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }} >
     <TouchableOpacity onPress={()=>{onTapEng()}} style={{
        height: 50,
        width: 150,
        borderWidth: 1,
        justifyContent:'center',
        alignItems: 'center'
     }}>
        <Text>
            English
        </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{onTapSpanish()}} style={{
        height: 50,
        width: 150,
        borderWidth: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
     }}>
        <Text>
            Spanice
        </Text>
     </TouchableOpacity>
    </View>
  )
}

export default LanguageScreen
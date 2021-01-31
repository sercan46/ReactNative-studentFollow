import React from 'react';
import {Text,View} from 'react-native';
const Header=(props)=>{
  const {textStyle,viewStyle}=styles;
  return(
    <View style={viewStyle} >
    <Text style={textStyle}>{props.headerText} </Text>
    </View>
  )
}
const styles={
  textStyle:{
    fontSize:25
  },
  viewStyle:{
    backgroundColor:'crimson',
    height:60,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:20,
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2
  }
};
export default Header

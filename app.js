import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native';
import { useRef, useState } from 'react';
import { Dimensions } from 'react-native';

export default function App() {
  
  const{height,width}=Dimensions.get('screen')
  
  const pin1Ref=useRef(null);
  const pin2Ref=useRef(null);
  const pin3Ref=useRef(null);
  const pin4Ref=useRef(null);
  const pin5Ref=useRef(null);
  const pin6Ref=useRef(null);
  const pin7Ref=useRef(null);
  const pin8Ref=useRef(null);
  const pin9Ref=useRef(null);
  const pin10Ref=useRef(null);
  const pin11Ref=useRef(null);
  const pin12Ref=useRef(null)

  const [pin1,setpin1]=useState("");
  const [pin2,setpin2]=useState("");
  const [pin3,setpin3]=useState("");
  const [pin4,setpin4]=useState("");
  const [pin5,setpin5]=useState("");
  const [pin6,setpin6]=useState("");
  const [pin7,setpin7]=useState("");
  const [pin8,setpin8]=useState("");
  const [pin9,setpin9]=useState("");
  const [pin10,setpin10]=useState("");
  const [pin11,setpin11]=useState("");
  const [pin12,setpin12]=useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/bg2.png")} resizeMode="cover">
      <Text style={{margin:50, paddingLeft:70}}>Change Password</Text>
      
      <Text style={{margin:10, paddingLeft:120}}>Old Password</Text>
      <View style={{flexDirection:'row', paddingLeft:50}}>
      
      <TextInput
      ref={pin1Ref}
       keyboardType='decimal-pad'
       maxLength={1}
       onChangeText={(pin1)=>{
        setpin1(pin1);
      if(pin1 !== null)
      {
      pin2Ref.current.focus();
      }
    if(pin1 === ""){
      pin1Ref.current.focus();
    }
  }}
       style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10,}}
      ></TextInput>
      <TextInput 
       ref={pin2Ref}
      keyboardType='decimal-pad'
      maxLength={1}
      onChangeText={(pin2)=>{setpin2(pin2)
        
          if(pin2 != null)
          {
      pin3Ref.current.focus();
          }
        if(pin2 == ""){
  pin1Ref.current.focus();
        }}}
      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}></TextInput>
     
      <TextInput 
       ref={pin3Ref}
      keyboardType='decimal-pad'
      maxLength={1}
      onChangeText={(pin3)=>{setpin3(pin3)
        
          if(pin3!= null)
          {
      pin4Ref.current.focus();
          }
        if(pin3 == ""){
  pin2Ref.current.focus();
        }}}
  
      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}></TextInput>
      
      <TextInput 
       ref={pin4Ref}
      keyboardType='decimal-pad'
      maxLength={1}
      onChangeText={(pin4)=>{setpin4(pin4)
        
          if(pin4!==null)
          {
      pin4Ref.current.focus();
  
          }
        if(pin4===""){
          pin3Ref.current.focus();
        }}}
      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}></TextInput>
      </View>
    
       <Text style={{margin:20, paddingLeft:120}}>New Password</Text>
      <View style={{flexDirection:'row',paddingLeft:50}}>
      <TextInput
     ref={pin5Ref}
      keyboardType={'numeric'}
      maxLength={1}
      onChangeText={(pin5)=>{
        setpin5(pin5);
      if(pin5 !== null)
      {
      pin6Ref.current.focus();
      }
    if(pin5 === ""){
      pin5Ref.current.focus();
    }
  }}
      
      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}></TextInput>
     
      <TextInput
       ref={pin6Ref}
      keyboardType={'numeric'}
      maxLength={1}
      onChangeText={(pin6)=>{setpin6(pin6)
        
        if(pin6 != null)
        {
    pin7Ref.current.focus();
        }
      if(pin6 == ""){
pin5Ref.current.focus();
      }}}
      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}></TextInput>
      <TextInput
       ref={pin7Ref}
       keyboardType={'numeric'}
      maxLength={1}
      onChangeText={(pin7)=>{setpin7(pin7)
        
        if(pin7!= null)
        {
    pin8Ref.current.focus();
        }
      if(pin7 == ""){
pin6Ref.current.focus();
      }}}
      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}></TextInput>
      <TextInput 
       ref={pin8Ref}keyboardType={'numeric'}
      maxLength={1}
      onChangeText={(pin8)=>{setpin8(pin8)
        
        if(pin8!==null)
        {
    pin8Ref.current.focus();

        }
      if(pin8===""){
        pin7Ref.current.focus();
      }}}

      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}></TextInput>
      </View>
  
      <Text style={{margin:20,paddingLeft:120}}>Confirm Password</Text>
      <View style={{flexDirection:'row',paddingLeft:50}}>
      <TextInput 
       ref={pin9Ref}
      keyboardType='decimal-pad'
      maxLength={1}
      onChangeText={(pin9)=>{
        setpin9(pin9);
      if(pin9 !== null)
      {
      pin10Ref.current.focus();
      }
    if(pin9 === ""){
      pin8Ref.current.focus();
    }
  }}
      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}> </TextInput>
      <TextInput
       ref={pin10Ref}
       keyboardType={'numeric'}
      maxLength={1}
      onChangeText={(pin10)=>{setpin10(pin10)
        
        if(pin10 != null)
        {
    pin11Ref.current.focus();
        }
      if(pin10 == ""){
pin9Ref.current.focus();
      }}}
      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}> </TextInput>
      <TextInput 
       ref={pin11Ref}
      keyboardType={'numeric'}
      maxLength={1}
      onChangeText={(pin11)=>{setpin11(pin11)
        
        if(pin11!= null)
        {
    pin12Ref.current.focus();
        }
      if(pin11 == ""){
pin10Ref.current.focus();
      }}}

      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}> </TextInput>
      <TextInput 
       ref={pin12Ref}
      keyboardType={'numeric'}
      maxLength={1}
      onChangeText={(pin12)=>{setpin12(pin12)
        
        if(pin12!==null)
        {
    pin12Ref.current.focus();

        }
      if(pin12===""){
        pin11Ref.current.focus();
      }}}

      style={{textAlign:'center',height:height/18.9,width:width/7.9,borderColor:'black',borderWidth:0.5,margin:10}}> </TextInput>
      </View> 
  
        <View style={{margin:30}}>   
        <Button title='Submit'></Button> 
        <StatusBar style="auto" /> 
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    flex:1,
  
  },
});

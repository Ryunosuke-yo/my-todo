import { Center, Input , View, IconButton, Icon, Button, KeyboardAvoidingView, Text, HStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { useState } from 'react';
import { InputAccessoryView } from 'react-native';



const Footer = ({onChange, value, onPress , showCal}) => {


  const [v, setV] = useState("")
  const handle = (t)=>{
    alert(t)
    setV(t)
  }

  // const onPress = ()=> alert(v)
    return (
      
        <View height="66" pt="2">
            <Center>
            <Input width="300"  variant="outline" placeholder="Todo" size="lg" borderColor="rgba(10, 10, 10, 0)" onChangeText={onChange} value={value} borderBottomColor={showCal ? "#e6bee6" : "#ffe3ff"} inputAccessoryViewID='inp' textAlign="center"
            
            />
            {/* <TextInput onChangeText ={handle} value={v}/>
            <Button onPress={onPress}>a</Button> */}
           
            </Center>

            <InputAccessoryView nativeID='inp'>
              <Center bg="#e6bee6">
              
            <Input width="350"  variant="outline" placeholder="Todo" size="lg" borderColor="rgba(10, 10, 10, 0)" onChangeText={onChange} value={value}  inputAccessoryViewID='inp' textAlign="center" h="50" 
            InputRightElement={
                <IconButton 
              icon ={ <Icon as={AntDesign} name="plus" size={23} color="white" ></Icon>}
              _pressed = {{
                _icon : {color : "#d9b0d9"},
                bg : "white"
              }}
              onPress={onPress}
              />
            }
            />
            
            </Center>
            </InputAccessoryView>
        </View>
      
    );
}

export default Footer;

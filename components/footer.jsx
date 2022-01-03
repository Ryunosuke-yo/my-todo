import { Center, Input , View, IconButton, Icon, Button} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { useState } from 'react';


const Footer = ({onChange, value, onPress}) => {


  const [v, setV] = useState("")
  const handle = (t)=>{
    alert(t)
    setV(t)
  }

  // const onPress = ()=> alert(v)
    return (
        <View height="66" pt="2">
            <Center>
            <Input width="300"  variant="outline" placeholder="Todo" size="lg" borderColor="#e6bee6" onChangeText={onChange} value={value} 
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
            {/* <TextInput onChangeText ={handle} value={v}/>
            <Button onPress={onPress}>a</Button> */}
           
            </Center>
        </View>
    );
}

export default Footer;

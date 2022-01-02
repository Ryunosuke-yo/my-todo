import { Center, Input , View, IconButton, Icon} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const Footer = () => {
    return (
        <View height="66" pt="2">
            <Center>
            <Input width="300"  variant="outline" placeholder="Todo" size="lg" borderColor="#e6bee6"
            InputRightElement={
                <IconButton 
              icon ={ <Icon as={AntDesign} name="plus" size={23} color="white" ></Icon>}
              _pressed = {{
                _icon : {color : "#d9b0d9"},
                bg : "white"
              }}
              />
            }
            />
            </Center>
        </View>
    );
}

export default Footer;

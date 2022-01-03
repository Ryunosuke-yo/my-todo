import React, {useState} from 'react';
import { VStack, Center, Heading, NativeBaseProvider, View , Text, Checkbox, HStack, ScrollView, Box, Input, IconButton, Icon} from "native-base"
import Cal from "./Cal"
import { borderTopColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Footer from './footer';
import { AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native';

const Main = ({showCal}) => {

    const cal = ()=> (
        <>
        <View  height="auto">
        <Cal />
        </View>
        <Center>
        <View borderTopColor="#c79fc7" borderTopWidth="1" mt = "4" width="80%"></View>

        </Center>
        </>
    )

    const [todos, setTodos] = useState([1])
    const [value, setValue] = useState("")

    const handle = (t)=>{
        
        setValue(t)
    }

    const onPressM = ()=>{

    setTodos([...todos, value])
    setValue("")
    }


    const mapTodo = todos.map(todo=>(
        <HStack space="6">
        <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
            <HStack alignItems="center" space="5">
            <Text fontSize="17">{todo}</Text>
            <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
            </HStack>
        </Center>
        </HStack>
    ))


    
    return (
        <>
        
        <View bg="#e6bee6" pt="8" height="900">
           {showCal ? cal() : null}
            <View height={showCal ? "370" : "900"}>
            <ScrollView _contentContainerStyle={
                {
                    
                    mt : 5,
                    
                }
            }>
            <VStack space={4} alignItems="center" >
                {mapTodo}
            </VStack>
            </ScrollView>
            

            <Footer onPress={onPressM} onChange={handle} value={value}/>
            {/* <View height="66" pt="2">
            <Center>
            <Input width="300"  variant="outline" placeholder="Todo" size="lg" borderColor="#e6bee6" 
            value={value}
            onChange={handle} 
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
        </View> */}

        </View>
            </View>
        
          
      </>
    );
}

export default Main;

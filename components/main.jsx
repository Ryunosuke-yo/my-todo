import React, {useState} from 'react';
import { VStack, Center, Heading, NativeBaseProvider, View , Text, Checkbox, HStack, ScrollView, Box, Input, IconButton, Icon} from "native-base"
import Cal from "./Cal"
import { borderTopColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Footer from './footer';
import { AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

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

    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")
    const [id, setId] = useState(0)

    const handle = (t)=>{
        setValue(t)
    }

    const onPressM = ()=>{
    setId(prev=>prev + 1)
    setValue("")
    setTodos([...todos, {id : id, todo : value}])
    }

    const deleteTodo = (id)=>{
        const filtered = todos.filter(todo=> todo.id != id)
        setTodos(filtered)
    }


    const mapTodo = todos.map(todo=>(
        <HStack space="6" key={todo.id}>
            <GestureRecognizer onSwipeLeft={()=>deleteTodo(todo.id)}>
        <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
            <HStack alignItems="center" space="5">
            <Text fontSize="17">{todo.todo}</Text>
            <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
            </HStack>
        </Center>
            </GestureRecognizer>
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

        </View>
            </View>
        
          
      </>
    );
}

export default Main;

import React, {useState, useEffect} from 'react';
import { VStack, Center, Heading, NativeBaseProvider, View , Text, Checkbox, HStack, ScrollView, Box, Input, IconButton, Icon, KeyboardAvoidingView, Modal, Button} from "native-base"
import Cal from "./Cal"
import { borderTopColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Footer from './footer';
import { AntDesign } from '@expo/vector-icons';
import { Alert , Keyboard, Platform} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const Main = ({showCal}) => {

    

    const cal = (c)=> (
        <>
        <View  height="auto">
        <Cal todos={c}/>
        </View>
        <Center>
        <View borderTopColor="#c79fc7" borderTopWidth="1" mt = "4" width="80%"></View>

        </Center>
        </>
    )

    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")
    const [month, setMonth] = useState("")
    const [date, setDate] = useState("")
    const [id, setId] = useState(0)
    const [che, setChe] = useState(false)
    const [modal, setModal] = useState(false)
    

       

    const handle = (t)=>{
        setValue(t)
    }

    const onPressM = ()=>{
    setId(prev=>prev + 1)
    setValue("")
    setTodos([...todos, 
        {id : id, 
        key : value, 
        completed : false, 
        color :"rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")",
        due : ""
    },
    ])
    Keyboard.dismiss()
    }

    const addDue = ()=>{
        setModal(true)

    }

    const deleteTodo = (id)=>{
        const filtered = todos.filter(todo=> todo.id != id)
        setTodos(filtered)
    }

    const handleComp = (id)=>{
       
    }

    
    const mapTodo = todos.map(todo=>
        {
          
            return (
                <HStack space="6" key={todo.id}>
                <GestureRecognizer onSwipeLeft={()=>deleteTodo(todo.id)}>
                    <Center w="170" h="70" bg={todo.color} rounded="md" shadow={2}>
                        <HStack alignItems="center" space="5" >
                        <Text fontSize="17" w="100" textAlign="center">{todo.key}</Text>
                        <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                    </HStack>
                </Center>
                </GestureRecognizer>
            </HStack>
            )
        }
        
       
    )


    
    return (
    <>
        
        <View bg="#e6bee6" pt="8" height="900">
           {showCal ? cal(todos) : null}
            <View height={showCal ? "370" : "700"}>
            <ScrollView _contentContainerStyle={
                {
                    
                    mt : 5,
                    height : 450
                }
            }>
            <VStack space={4} alignItems="center" >
                {mapTodo}
            </VStack>
            </ScrollView>
            
          
            <Footer onPress={onPressM} onChange={handle} value={value} showCal={showCal} addDue={addDue}/>
        
            <Modal isOpen={modal} isClose={() => setModal(false)}>
                <Modal.Content mt="-200">
                <Modal.CloseButton onPress={() => {
                    setModal(false)
                    }}/>
                <Center height="250" pt="5" pb="5">
                <VStack space="10" >
                <Input placeholder='Month' textAlign="center" w="40" borderColor="rgba(10, 10, 10, 0)" borderBottomColor="#f7e6f7"/>
                <Input placeholder='Date' textAlign="center" w="40" borderColor="rgba(10, 10, 10, 0)" borderBottomColor="#f7e6f7"/>
                </VStack>
                <Button
                    onPress={() => {
                    setModal(false)
                    }}
                w="20"
                mt="9"
                bg="transparent"
                variant="outline"
                borderColor="transparent"
                borderBottomColor="#f7e6f7"
                >
                    <Text  color="grey">
                    Set Due
                    </Text>
                </Button>
                </Center>

                </Modal.Content>
            </Modal>
        </View>
            </View>

    </>
    );
}

export default Main;

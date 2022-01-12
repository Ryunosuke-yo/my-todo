import React, {useState, useEffect, useRef} from 'react';
import { VStack, Center, Heading, NativeBaseProvider, View , Text, Checkbox, HStack, ScrollView, Box, Input, IconButton, Icon, KeyboardAvoidingView, Modal, Button, FormControl} from "native-base"
import Cal from "./Cal"
import { borderTopColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Footer from './footer';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { Alert , Keyboard, Platform,  InputAccessoryView, Pressable} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const Main = ({showCal}) => {

    

    const cal = (c, o, current)=> (
        <>
        <View  height="auto">
        <Cal todos={c} addDue={o} current={current}/>
        </View>
        <Center>
        <View borderTopColor="#c79fc7" borderTopWidth="1" mt = "4" width="80%"></View>
        </Center>
        </>
    )

    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")
    const [month, setMonth] = useState("")
    const [monthV, setMonthV] = useState("")
    const [date, setDate] = useState("")
    const [color, setColor] = useState()
    const [dateV, setDateV] = useState("")
    const [id, setId] = useState(0)
    const [che, setChe] = useState(false)
    const [modal, setModal] = useState(false)
    const [oneT, setOneT] = useState({})
    const [idToSet, setIdToSet] = useState()
    const [editMode, setEditMode] = useState(false)
    const [index, setIndex] = useState()
    const [current, setCurrent] = useState()


    const handle = (t)=>{
        setValue(t)
    }

    const inpEditRef = useRef()

    const onPressM = ()=>{
        const dueee = `2022-${monthV}-${dateV}`
        setCurrent(dueee)
        const random = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")"
        setId(prev=>prev + 1)
        setValue("")
        setMonthV("")
        setDateV("")
        setTodos([...todos, 
            {id : id, 
            key : value, 
            completed : false, 
            color :random,
            due : `2022-${monthV}-${dateV}`
        },
        ])
        setColor(random)
        const ev = {key : value, color : random}
        
        setOneT(()=>{
            if(dueee in oneT){
                return {
                    ...oneT,
                    [dueee] : {
                        dots : [...oneT[dueee].dots, ev]
                    }
                }
            } else {
                return {
                    ...oneT,
                    [dueee] : {
                        dots : [ev]
                    }
                }
            }
        })

            setEditMode(false)
       
        Keyboard.dismiss()
    }

    const onPressEdit = ()=>{
        setTodos(
            todos.map((todo, i)=>(
                todo.id === idToSet ? {
                        id : todo.id, 
                        key : value, 
                        completed : false, 
                        color :todo.color,
                        due : `2022-${monthV}-${dateV}`
                    
                } : todo
                ))
                )

                
        
        
                setEditMode(false)
                setValue("")
                setMonthV("")
                setDateV("")
                Keyboard.dismiss()
    }

    const modalOpen = ()=>{
        setModal(true)

    }

    const deleteTodo = (id, date, value)=>{
        const filtered = todos.filter(todo=> todo.id != id)
        setTodos(filtered)
        
        setOneT({
            ...oneT,
            [date] : {
                dots : oneT[date].dots.filter(el => el.key != value)
            }
        })
        
    }

    const monthChange = (e)=>{
        setMonthV(e)
        
    }

    const dateChange = (e)=>{
        setDateV(e)
    }


    const editTodo = (id, i)=>{
        inpEditRef.current.focus()
        setEditMode(true)
        setIdToSet(id)
        setIndex(i)
    }

    
    const mapTodo = todos.map((todo, i)=>
        {
          
            return (
                <Pressable onPress={()=>editTodo(todo.id, i)}>
                <HStack space="6" key={todo.id} >
                <GestureRecognizer onSwipeLeft={()=>deleteTodo(todo.id,todo.due, todo.key)} >
                    <Center w="170" h="70" bg={todo.color} rounded="md" shadow={2} >
                        <HStack alignItems="center" space="5" >
                        <Text fontSize="17" w="100" textAlign="center">{todo.key}</Text>
                        <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                    </HStack>
                </Center>
                </GestureRecognizer>
            </HStack>
                </Pressable>
            )
        }
        
       
    )


    
    return (
    <>
        
        <View bg="#e6bee6" pt="8" height="900">
           {showCal ? cal(todos, oneT, current) : null}
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
            <Footer onPress={editMode ? onPressEdit : onPressM} onChange={handle} value={value} showCal={showCal} addDue={oneT} open={modalOpen} inpRef={inpEditRef} editMode={editMode} />
        
            <Modal isOpen={modal} isClose={() => setModal(false)}>
                <Modal.Content mt="-200">
                <Modal.CloseButton onPress={() => {
                    setModal(false)
                    }}/>
                <FormControl>
                <Center height="250" pt="5" pb="5">
                <VStack space="10" >
                <Input placeholder='Month' textAlign="center" w="40" borderColor="rgba(10, 10, 10, 0)" borderBottomColor="#f7e6f7" value={monthV} onChangeText={monthChange}/>
                <Input placeholder='Date' textAlign="center" w="40" borderColor="rgba(10, 10, 10, 0)" borderBottomColor="#f7e6f7" value={dateV} onChangeText={dateChange}/>
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
                </FormControl>
                </Modal.Content>
            </Modal>

        </View>
            
            </View>




    </>
    );
}

export default Main;

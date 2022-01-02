import React from 'react';
import { VStack, Center, Heading, NativeBaseProvider, View , Text, Checkbox, HStack, ScrollView, Box} from "native-base"
import Cal from "./Cal"
import { borderTopColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Footer from './footer';


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

            <HStack space="6">
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                </HStack>
            </Center>
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" /> 
                </HStack>
            </Center>
            </HStack>

            <HStack space="6">
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                </HStack>
            </Center>
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" /> 
                </HStack>
            </Center>
            </HStack>

            <HStack space="6">
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                </HStack>
            </Center>
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" /> 
                </HStack>
            </Center>
            </HStack>

            <HStack space="6">
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                </HStack>
            </Center>
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" /> 
                </HStack>
            </Center>
            </HStack>

            <HStack space="6">
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                </HStack>
            </Center>
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" /> 
                </HStack>
            </Center>
            </HStack>

            <HStack space="6">
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                </HStack>
            </Center>
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" /> 
                </HStack>
            </Center>
            </HStack>

            <HStack space="6">
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                </HStack>
            </Center>
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" /> 
                </HStack>
            </Center>
            </HStack>

            <HStack space="6">
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" />          
                </HStack>
            </Center>
            <Center w="170" h="70" bg="#e3a1e3" rounded="md" shadow={2}>
                <HStack alignItems="center" space="5">
                <Text fontSize="17">うんこをする</Text>
                <Checkbox size="md" value='black' colorScheme="rgb(227, 161, 227)" /> 
                </HStack>
            </Center>
            </HStack>

           
            </VStack>
            </ScrollView>
            <Footer />
        </View>
            </View>
        
          
      </>
    );
}

export default Main;

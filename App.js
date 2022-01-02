
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { IconButton, Icon, Center, NativeBaseProvider, extendTheme, HStack, Box } from "native-base"
import Main from "./components/main"
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();



export default function App() {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const month = new Date().getMonth() + 1
  const date = new Date().getDate()
  const day = new Date().getDay()

  const [showCal, setShowCal] = useState(false)
  
  const toggle = ()=>{
    setShowCal(prev=> !prev)
  }

  
  return (
    <>
    <NativeBaseProvider>
      
      <NavigationContainer>
     
        <Stack.Navigator >
          <Stack.Screen name="n" options={{ title: `${month} / ${date} ${days[day]}`, 
          headerStyle: {
              backgroundColor: '#CC99CC',
              height : 80
          } 
            ,
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'light',
            },
            headerLeft: () => (
              <IconButton 
              icon ={ <Icon as={FontAwesome} name={showCal ? "calendar-minus-o" : "calendar-plus-o"} size={23} color="white" ></Icon>}
              _pressed = {{
                _icon : {color : "#d9b0d9"},
                bg : "white"
              }}
              onPress={toggle}
              />
            ),
            
            }}>
              {()=><Main showCal={showCal}/>}
              </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
   

      

    </>
    
  )
}



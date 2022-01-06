import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const Cal = ({todos, addDue}) => {
    // const [dotsColor, setDotsColor] = useState([])
    
    
    // useEffect(()=>{
    //     if(todos.length != 0){
    //         const todosCon = todos[todos.length -1]
    //         setDotsColor([...dotsColor, {key: `${todosCon.value}`, color: `${todosCon.color}`, selectedDotColor: 'blue'}])
    
    //     }
    // }, [todos])
    const due = {...addDue}
    const workout = {key: 'workout', color: 'green'};
    const vacation = {key: 'workout', color: 'blue'}


    return (
        
        <Calendar
        style ={{
            borderRadius : 30,
            marginLeft : "auto",
            marginRight : "auto",
            backgroundColor: '#e3a1e3',
            height : 370,
            width : 360
        
        }}
        theme={{
            // calendarBackground: '"#e6bee6',
            calendarBackground: '#e3a1e3',
            arrowColor: 'orange',
        }}

        markingType={'multi-dot'}
        markedDates={
            addDue[0]
            // '2022-01-25': {dots: [vacation], },
            // '2022-01-25': {dots: [workout], },
    }
       
        />
        
    );
}

export default Cal;

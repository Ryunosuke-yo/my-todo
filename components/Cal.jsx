import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const Cal = ({todos, addDue}) => {
    
    const workout = {key: 'workout', color: 'green'};
    const vacation = {key: 'workout', color: 'blue'}

    const [dueList, setDueLIst] = useState()

    // useEffect(()=>{
        
    //     setDueLIst(dueOb)
        
    // }, [todos])
    
    const dueOb = Object.assign({}, ...addDue.map((due)=>({
        [due.date] : due.dotList
    })))

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
            dueOb
            // '2022-01-25': {dots: [vacation], },
            // '2022-01-25': {dots: [workout], },
    }
       
        />
        
    );
}

export default Cal;

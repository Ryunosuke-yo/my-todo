import { View } from 'native-base';
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Cal = () => {
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
       
        />
        
    );
}

export default Cal;

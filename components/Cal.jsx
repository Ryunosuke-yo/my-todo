import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Ellipse } from 'react-native-svg';


const Cal = ({todos, addDue, current}) => {
    

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
            calendarBackground: '#e3a1e3',
            arrowColor: 'orange',
        }}

        markingType={'multi-dot'}
        markedDates={
            addDue
    }
       
        />
        
    );
}

export default Cal;

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

    // const dues = addDue.filter((due, i, self)=>{
    //     self.includes(due.date) ? self.findIndex(e=>{
    //         e.date == due.date
    //     }) : due
        
    // })

    // const dues = addDue.map((due, i, self)=>{
    //     if(!self.includes(due.date)) {
    //        return {[due.date ] : due.dotList}
    //     } else {
    //         const ii = self.findIndexOf(due.date === self[i].date)
    //         return self[ii].dotList.dots.push(due.dotList.dots)
    //     }
    // }
    // )
       
        

        
    
    
    
    const workout = {key: 'workout', color: 'green'};
    const vacation = {key: 'workout', color: 'blue'}

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

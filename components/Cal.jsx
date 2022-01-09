import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Ellipse } from 'react-native-svg';


const Cal = ({todos, addDue, current}) => {
    const [dueList, setDueLIst] = useState([])
    const [ob, setOb] = useState({})

    useEffect(()=>{
        
        
        const integrateDue = ([...array])=>{
        if (array.length > 0) {
                const count = array.filter(el=> el.date === current).length
                if(count > 1){
                    const mapped = array.map((el, i, self)=>{
                        const index = self.findIndex((el)=>el.date === current)
                        el.dotList.dots.push(self[index].dotList.dots[0])
                       
                        return {
                            dotList: el.dotList,
                            date : el.date,
                            id : el.id
                        }
                    }
                    
                    )
                    setDueLIst([...mapped])
                    
                    alert(dueList.length)
                } else{
                    setDueLIst([...array])
                }
                
            }
            
        }
        
        integrateDue([...addDue])
        // setOb({...dueOb})
    }, [todos])
    
    
    const dueOb = dueList.length > 0 ?  Object.assign({}, ...dueList.map((due)=>({
        [due.date] : due.dotList
    }))) : null

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
            dueOb
    }
       
        />
        
    );
}

export default Cal;

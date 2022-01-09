import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Ellipse } from 'react-native-svg';


const Cal = ({todos, addDue, current}) => {
    const [dueList, setDueLIst] = useState([])
    const [ob, setOb] = useState({})
    const [dIndex, setDIndex] = useState([])

    useEffect(()=>{
        
        
        // const integrateDue = ([...array])=>{
        // if (array.length > 0) {
        //         const count = array.filter(el=> el.date === current).length
        //         if(count > 1){
        //             const indexes = ()=>{for (let i = 0; i < array.length; i++) {
        //                 if(array[i].dotList.dots == current){
        //                     return i
        //                 }
        //             }
                        
        //             }
        //             const mapped = array.map((el, i, self)=>{
        //                 const index = self.findIndex((el)=>el.date === current)
        //                 el.dotList.dots.push(self[index].dotList.dots[0])
                       
        //                 return {
        //                     dotList: el.dotList,
        //                     date : el.date,
        //                     id : el.id
        //                 }
        //             }
                    
        //             )
        //             const mapped2 = mapped.map((el)=>{
        //                 const a = Array.from(new Set(el.dotList.dots))

        //                 return {
        //                     dotList: a,
        //                     date : el.date,
        //                     id : el.id
        //                 }
        //             })
        //             setDueLIst([...mapped])
                    
        //             alert(dueList.length)
        //         } else{
        //             setDueLIst([...array])
        //         }
                
        //     }
            
        // }

        for (let i = 0; i < addDue.length; i++) {
            if(addDue[i].date == current)
            setDIndex([...dIndex, i])
            
        }
        alert(dIndex[1])
        // integrateDue([...addDue])
        // setOb({...dueOb})
    }, [addDue])
    
    
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

import React, { useState } from 'react'
import MyContext from './MyContext' 
import events from './eventsDemo.json'

// "id": "evt020",
// "name": "Digital Transformation Conference",
// "mode": "online",
// "location": "Online",
// "startDate": "2024-06-19T10:00:00",
// "endDate": "2024-06-19T15:00:00",
// "capacity": 150,
// "registeredCount": 130

function MyState(props) {
  const [details,setDetails]=useState({
      "id":null,
      "name":null,
      "mode":null,
      "location":null,
      "startDate":null,
      "endDate":null,
      "capacity":null,
      "registeredCount":null
  });
  
  const [allEvents,setAllEvents]=useState([]);
  const [items,setItems]=useState(allEvents);
  // const [loading,setLoading]=useState(false);

  const handleClick=(type)=>{
    // setLoading(true);
    console.log(type);   
    if(type=="all"){
      setItems(allEvents);
    }
    else{
      const temp=allEvents?.filter((data)=>data.mode===type)
      setItems(temp);
    }
    // setLoading(false);
  }

  return (
    <MyContext.Provider value={{details,setDetails,items,setItems,handleClick,allEvents,setAllEvents}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState
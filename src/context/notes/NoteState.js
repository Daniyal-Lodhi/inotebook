import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const Bio = {
        "name" : "daniyal" ,
        "age" : 19
    }
    const [data,setdata] = useState(Bio)
    const update = ()=>{
        setTimeout(()=>{
            setdata({
                "name" : "Moin" ,
                "age" : 19
            })}
        ,1000)
    }

    return(
        <NoteContext.Provider value={{data,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
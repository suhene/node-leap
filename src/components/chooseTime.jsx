import { useState } from "react"

export const ChooseTimeButton = () =>{
    const chooseTimeButtonStyle = {
        width:'70px',
        margin:'5px',
        backgroundColor:'white',
        color:'black',
        border:'1px solid red'
    }
    const [getTime,setTime] = useState();
    return(
        <div style={{width:'200px',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
            <input type="button" value="11:00 PM" style={chooseTimeButtonStyle} onClick={(e) => setTime(e.target.value)}/>
            <input type="button" value="11:00 PM" style={chooseTimeButtonStyle} onClick={(e) => setTime(e.target.value)}/>
            <input type="button" value="11:00 PM" style={chooseTimeButtonStyle} onClick={(e) => setTime(e.target.value)}/>
            <input type="button" value="11:00 PM" style={chooseTimeButtonStyle} onClick={(e) => setTime(e.target.value)}/>
            <input type="button" value="11:00 PM" style={chooseTimeButtonStyle} onClick={(e) => setTime(e.target.value)}/>
        </div>
    )
}
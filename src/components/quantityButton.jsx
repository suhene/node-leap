import { useState } from "react"
import { useUserData } from "../context/userDataContext";

export const QuantityButton = () =>{
    const {setUserData} = useUserData();
    const quantity = {
        width:'40px',
        height:'23px'
    }
    const [PlusOrMin,setPlusOrMin] = useState(0);

    return (
        <>
        <input type="button" value="-" style={quantity} onClick={() => PlusOrMin>0 && setPlusOrMin(PlusOrMin-1)}/>
        <input type="number" name="" id="Decimal" style={{width:'50px',textAlign:'center'}} value={PlusOrMin} onChange={(el)=> setUserData(el.target.value)}/>
        <input type="button" value="+" style={quantity} onClick={()=>setPlusOrMin(PlusOrMin+1)}/>
        </>
    )
}
import { useState } from "react";
import { Cart } from "../components/cart"
import { Form } from "../components/form";
import { Order } from "../components/order";
import { UseMovieContext } from "../context/movieContext"

export const Home = () =>{
    const {getData} = UseMovieContext();
    const [chooseMovie,setMovie] = useState('choosingMovie');
    return (
        <div>
            {chooseMovie === 'choosingMovie' && <><h2 style={{textAlign:'center',padding:'15px '}}>Movie List</h2>
            <div style={{display:'flex',flexWrap:'wrap',maxWidth:'1300px',margin:'auto'}}>
                {getData.map(el => <Cart movieData={el} chooseMovie={setMovie}/>)}
            </div></>}
            {chooseMovie === 'choosingInfo' && <div style={{maxWidth:'1100px',margin:'auto'}}>
                <Order personalInfo={setMovie}/>    
            </div>}
            {chooseMovie === 'choosingPersonalInfo' && <div style={{maxWidth:'1100px',margin:'auto'}}>
                <Form/>
            </div>}
        </div>
    )
}
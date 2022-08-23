import { UseMovieContext } from "../context/movieContext"
import { Avatar } from "./avatar"
import './cart.css'
export const Cart = ({movieData,chooseMovie}) =>{
    const {setChosen} = UseMovieContext();
    return(
        <div className="cart-main">
            <div className="cart">
                <Avatar movieData = {movieData}/>
                <h3>{movieData.name}</h3>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <h4 style={{fontWeight:'500'}}>{movieData.date}</h4>
                    <button onClick={() => {chooseMovie('choosingInfo');setChosen(movieData)}} >View More</button>
                </div>
            </div>
        </div>
    )
}
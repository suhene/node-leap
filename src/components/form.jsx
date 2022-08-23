import { UseMovieContext } from "../context/movieContext"
import { ChooseTimeButton } from "./chooseTime";
import './form.css'
import { QuantityButton } from "./quantityButton";
export const Form = () =>{
    const {getChosen} = UseMovieContext();
    return(
        <div style={{display:'flex',paddingTop:'5rem',justifyContent:'space-between'}}>
            <div>
                <img src={getChosen.image} alt="" style={{width:'700px',height:'700px',borderRadius:'25px'}}/>
            </div>
            
            <div style={{display:'flex',flexDirection:'column',lineHeight:'2rem'}}>
                <h4 style={{fontSize:'25px'}}>Order Phase</h4>
                <form>
                    <div className="form-label-input">
                        <label htmlFor="">Username</label>
                        <br/>
                        <input/>
                    </div>
                    <div className="form-label-input">
                        <label htmlFor="">Phone number</label>
                        <br/>
                        <input type={"number"}/>
                    </div>
                    <div className="form-label-input">
                        <label htmlFor="">Email</label>
                        <br/>
                        <input type={"email"}/>
                    </div>
                    <div className="form-label-input">
                        <label htmlFor="">Adult</label>
                        <br/>
                        <QuantityButton/>

                    </div>
                    <div className="form-label-input">
                        <label htmlFor="">Child</label>
                        <br/>
                        <QuantityButton/>
                        
                    </div>
                    <div className="form-label-input">
                        <label htmlFor="">Choose Your Time</label>
                        <ChooseTimeButton/>
                        
                    </div>
                    <div className="form-label-input">
                        
                        <div>
                            <input type="button" value="Continue"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
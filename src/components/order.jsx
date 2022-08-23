import { UseMovieContext } from "../context/movieContext"

export const Order = ({personalInfo}) =>{
    const{getChosen} = UseMovieContext();
    return (
        <div style={{display:'flex',justifyContent:'space-between',paddingTop:'5rem'}}> 
            <img src={getChosen.image} alt="" style={{width:'700px',height:'700px',borderRadius:'25px'}}/>
            <div style={{padding:'15px',lineHeight:'2.5rem'}}>
                <h1>{getChosen.name}</h1>
                <h3>Show Date:</h3>
                <h4>{getChosen.date}</h4>
                <div style={{float:'left'}}>
                    <button style={{marginLeft:'3px'}}>Back</button>
                    <button onClick={() => personalInfo('choosingPersonalInfo')}>Order now</button>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import preloader from "../../assets/loader/Interwind-1.5s-367px.svg";


const Preloader:React.FC=()=>{
    return <div>
        <img src={preloader} alt="loader" style={{width:'100%'}}/>
    </div>
}

export default Preloader
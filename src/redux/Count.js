import React from "react";
import { useSelector } from "react-redux";
const Count=()=>{
    const counts = useSelector(state=>state);
    console.log(counts)
    return(
        <div>
            <h2>{counts}</h2>
        </div>
    );
}
export default Count;
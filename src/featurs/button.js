import {Link, useNavigate} from 'react-router-dom';
import Images from '../images';
import { useEffect } from 'react';
export default function Button(){
    let navigate=useNavigate();
    const by=()=>{
        
    }
    

    
    return(
        <button><Link to="/image">show</Link></button>
    )

}
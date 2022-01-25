import React from 'react';
import { useState} from 'react/cjs/react.development';
import ChangePass from './ChangePass';


const ForgtoPass = () => {
    const [inputEmail, setEmail] = useState("");
    const [inputBrithdate, setBrithday] = useState("");
    const [inputRsecret, setRsecret] = useState("");
    const [userId, setUserID] = useState();
     const [chagStat, setChagStat] = useState (false)

    const  getAllUser  = async ()=>{

        fetch('https://table-realtions.herokuapp.com/api/member')
        .then(resp=>resp.json())
        .then((data)=>{
            console.log(data.email);
            data.forEach(element => {
                if(element.email === inputEmail && element.brithdate === inputBrithdate && element.Rsecret === inputRsecret ){
                    setChagStat(true)
                    setUserID(element.id)
                }
                
            });
        })
    
    }


    if(chagStat){
        return <ChangePass yourId={userId}/>
    }
  
    

    return (
        <div className='container'>
        <form className='form-control mb-3 mt-5'>

       
        <label className='mt-1'>Enter your email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control mb-3 " placeholder="expale@gmail.com"/>

        <label className='mt-1'>Enter your Brithday</label>
        <input onChange={(e)=>setBrithday(e.target.value)} type="date" className="form-control mb-3 " placeholder="Birthday"/>

        <label className='mt-1'>What is your favorit food name?</label>
        <input onChange={(e)=>setRsecret(e.target.value)} type="text" className="form-control mb-3 " placeholder="Secrect Answer"/>

        <div className='d-grid gap-2 mb-3'>
         <button onClick={getAllUser} type='button' className='btn btn-dark btn-lg border-0 rounded-0'>Submit</button>
        </div>  
    </form>
    </div>
    );
};

export default ForgtoPass;
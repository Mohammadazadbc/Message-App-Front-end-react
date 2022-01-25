import React from 'react';
import { useState } from 'react/cjs/react.development';

const ChangePass = ({yourId}) => {
    const [newPass, setNewPass] = useState("");
    const [conPass, setConfirmPass] =useState("");
    const [happend ,setHappend] = useState(false)

    function setNewPassword (yourId){
        
      
        if(newPass === conPass){
         fetch(`https://table-realtions.herokuapp.com/api/login/changepass/${yourId}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    password:newPass
                })
        
            }).then(resp=>resp.json())
            .then((data)=>{
                setHappend(true)
            })
        }
        else{
            console.log("password not match");
        }
    
    }

    return (
        <div className='container'>
        <form className='form-control mb-3'>

        <label className='mt-1'>New Password</label>
        <input onChange={(e)=>setNewPass(e.target.value)} type="password" className="form-control mb-3 " placeholder="New Password..."/>
       
        <label className='mt-1'>Confirm Password</label>
        <input onChange={(e)=>setConfirmPass(e.target.value)} type="password" className="form-control mb-3 " placeholder="Confirm Password..."/>
        
        <div className='d-grid gap-2 mb-3'>
         <button onClick={()=> setNewPassword(yourId)}  type='button' className='btn btn-dark btn-lg border-0 rounded-0'>Save</button>
          { happend? <p>Your Password has been changes</p>: <p>Password not changes</p>}
        </div>  
    </form>
    </div>
    );
};

export default ChangePass;
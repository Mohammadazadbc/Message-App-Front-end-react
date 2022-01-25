import React, { useState, useEffect } from 'react';
import UserList from './User/UserList';

const Home = () => {
    const [email , setEmail] = useState("");
    const [password , setPass] = useState("");
    const [logStatus , setLogStatus] = useState(false);
 



    function loginUser(){
        let userInfo ={
            email:email,
            password:password
        }
        fetch('https://table-realtions.herokuapp.com/api/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userInfo)
        }).then((resp)=>resp.json())
        .then((data)=>{
            if(data.message==="welcome"){
                console.log(data);
                let val = data;
                localStorage.setItem("user-message", JSON.stringify(val));
                setLogStatus(true)
                console.log("password match");
                
                
            }
            else{
               console.log("Email of Password incorect");
            }
        })
    }
  
 
    let locVal = localStorage.getItem('user-message');
    if(logStatus || locVal){
        return <UserList uEmail={email} />
    }

    return (
       <div className='container-sm'>
           <div className='row content d-flex justify-content-center'>
               <div className='col-md-5'>
                   <div className='box shadow bg-white p-4'>
                       <h3 className='mb-4 text-center fs-1'>Login</h3>
                      
                       <form className='form-control mb-3'>
                           <label className='mt-3'>Email</label>
                           <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control mb-3 " placeholder="example@gmail.com"/>
                           <label className='mt-3'>Password</label>
                           <input onChange={(e)=>setPass(e.target.value)} type="password" className="form-control mb-3 " placeholder="Password"/>
                           <div className='d-grid gap-2 mb-3'>
                            <button onClick={ loginUser} type='button' className='btn btn-dark btn-lg border-0 rounded-0'>Login</button>
                  
                           </div>
                           <div className="forgot-password-link mb-3 singup">
                               <a href="/forgot" title="forgot Password" className='text-decoration-none' >Forgot Password?</a>
                               <a href="/register" title="Make Account" className='text-decoration-none' >Singe up</a>
                           </div>
                          
                       </form>
                   </div>
               </div>
           </div>
       </div>
          
    );
};

export default Home;
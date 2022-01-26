import React, { useState } from 'react';
import UserList from './User/UserList';

const Register = () => {
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [brithdate, setBrithday] = useState("");
    const [Rsecret, setRsecret] = useState("");
    const [logStatus , setLogStatus] = useState(false);
   

    const  AddUser =() =>{
        let newUser = {firstname,lastname,email,password,brithdate,Rsecret};
        fetch("https://table-realtions.herokuapp.com/api/member",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        }).then(resp => resp.json())
        .then((data)=>{
            console.log(data)
            setLogStatus(true)
        })

    }
    if(logStatus){
        return <UserList/>
    }

    return (
        <div className='container-sm'>
        <div className='row content d-flex justify-content-center'>
            <div className='col-md-5'>
                <div className='box shadow bg-white p-4'>
                    <h3 className='mb-4 text-center fs-1'>Make an account</h3>
                   
                    <form className='form-control mb-3'>
                        <label className='mt-3'>First Name</label>
                        <input onChange={(e)=>setFirstName(e.target.value)}  type="text" className="form-control mb-3 " placeholder="First Name..."/>
                        
                        <label className='mt-1'>Last Name</label>
                        <input onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control mb-3 " placeholder="Last Name..."/>

                        <label className='mt-1'>Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control mb-3 " placeholder="expale@gmail.com..."/>

                        <label className='mt-1'>Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control mb-3 " placeholder="Password"/>


                        <label className='mt-1'>Brithday</label>
                        <input onChange={(e)=>setBrithday(e.target.value)} type="date" className="form-control mb-3 " placeholder="Birthday"/>

                        <label className='mt-1'>What is your favorit food?</label>
                        <input onChange={(e)=>setRsecret(e.target.value)} type="text" className="form-control mb-3 " placeholder="Secrect Answer."/>

                        <div className='d-grid gap-2 mb-3'>
                         <button onClick={AddUser} type='button' className='btn btn-dark btn-lg border-0 rounded-0'>Save</button>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;
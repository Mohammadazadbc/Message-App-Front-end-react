import React, { useState, useEffect} from 'react';
import Nav from './Nav';

const EditProfile = ({adminId}) => {
    console.log(adminId);
    const [profInfo,setProfInfo] = useState([]);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [brithdate, setBrithdate] = useState("");
    const [Rsecret, setRsecret] = useState("");
    
  

    const  getAllUser  = async ()=>{
        fetch(`https://table-realtions.herokuapp.com/api/member/${adminId}`)
        .then(resp=>resp.json())
        .then((data)=>{
            setProfInfo(data)

        })
    
    }

    useEffect(()=>{
        getAllUser()
    },[])

    const UpdateProfile =async () =>{
        if(password === cPassword){
            fetch(`https://table-realtions.herokuapp.com/api/member/${adminId}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    firstname:firstname,
                    lastname:lastname,
                    email:email,
                    password:password,
                    brithdate:brithdate,
                    Rsecret:Rsecret
                })
              
    
            }).then(resp=>resp.json)
            .then((data)=>{
                if(data.message == "data updated"){
                    console.log("data has been changed");
                }else{
                    console.log("some problem");
                }
            })

        }
        else{
            alert("password not matched")
        }
    }


  
    return (
        <div className='container'>
            <Nav/>
          
            <form className='container-sm mt-5 '>
                        <input onChange={(e)=>setFirstname(e.target.value)} required className='border-1 p-1 mt-1 ' type="text" placeholder={profInfo.firstname} /> 
                        <input onChange={(e)=>setLastname(e.target.value)} required className='border-1 p-1 mt-1' type="text" placeholder={profInfo.lastname}/> 
                        <input onChange={(e)=>setEmail(e.target.value)} required className='border-1 p-1 mt-1' type="text" placeholder={profInfo.email}/> 
                        <input onChange={(e)=>setPassword(e.target.value)} required className='border-1 p-1 mt-1' type="password" placeholder='new Password' /> 
                        <input onChange={(e)=>setCPassword(e.target.value)} required className='border-1 p-1 mt-1' type="password" placeholder="Confirm Password..." /> 
                        <input onChange={(e)=>setBrithdate(e.target.value)} required className='border-1 p-1 mt-1' type="text" placeholder={profInfo.brithdate}/> 
                        <input onChange={(e)=>setRsecret(e.target.value)} required className='border-1 p-1 mt-1' type="text" placeholder={profInfo.Rsecret}/> 
                      
                        <button onClick={UpdateProfile} className='m-2 ms-5 btn-center btn-primary'>Save Changes</button>
                  
                       </form>
                       <div class="modal" tabindex="-1">
                  
               
            </div>
            
        </div>
    );
};

export default EditProfile;
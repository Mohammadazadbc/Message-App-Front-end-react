import React, { useState, useEffect } from 'react';
import Nav from "../../User/Nav"

const Chat = ({adminId, secPersonId}) => {

    const [members,setMembers] = useState([]);
    const [sMsg, setSMsg] =useState("");
    const [allChats,setAllChats] = useState([]);
    const  getAllUser  = async ()=>{

        fetch(`https://table-realtions.herokuapp.com/api/member/${secPersonId}`)
        .then(resp=>resp.json())
        .then((data)=>{
            setMembers(data)
        })
    }

    useEffect(()=>{
        getAllUser();
    },[])

   const SendMessage = async()=>{
   let sendMsg ={
       chats:sMsg
   }
    fetch(`https://table-realtions.herokuapp.com/api/addmember/${secPersonId}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
           body:JSON.stringify(sendMsg)
           
       })
       .then(resp=>resp.json())
       .then((data)=>{
           console.log("added");
           setSMsg(data)
           setSMsg("");
           showMessages();
       })
   }
   const  showMessages  = async ()=>{

    fetch(`https://table-realtions.herokuapp.com/api/chats/${secPersonId}`)
    .then(resp=>resp.json())
    .then((data)=>{
        setAllChats(data)
       
       
    })
}

useEffect(()=>{
    showMessages();
},[])
const deleteMessage = (id)=>{
    fetch(`https://table-realtions.herokuapp.com/api/chats/${id}`,{
        method:"DELETE"
    }).then(resp=>resp.json())
    .then((data)=>{
        console.log("deleted");
        showMessages();
    })
}
    
    return (
        <div className='container'>
            <Nav />
            <form className='form-control mb-3'>
         
            <h3>{members.firstname}</h3>
            <div class="form-group">
                    <div className='charArea'>
                        { allChats.map((val)=>(
                            <div>
                                    <p>{val.chats} </p>
                                   <img onClick={()=> deleteMessage(val.id)} src="https://img.icons8.com/material-outlined/24/000000/filled-trash.png"/>
                            </div>
                                   
                        ))}
                    </div>
                    <div className='charAreaInput'>
                    <input value={sMsg} onChange={(e)=>setSMsg(e.target.value)} placeholder='Type message' type="text"/>
                    <img onClick={SendMessage} type='button' src="https://img.icons8.com/small/48/000000/filled-sent.png"/>
                    </div>
            </div>
             </form>
            
        </div>
    );
};

export default Chat;
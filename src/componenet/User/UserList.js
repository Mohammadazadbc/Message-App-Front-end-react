import React,{ useEffect} from 'react';
import { useState } from 'react/cjs/react.development';
import Nav from './Nav';
import Profile from './Profile';
import Chat from "./Chats/Chat"


const UserList = ( {uEmail} ) => {
    
    const [members, setMembers] = useState([]);
    const [adminId, setAdminId] = useState();
    const [secPersonId, setSecPersonId] = useState();
    const [chatPage, setChatPage] = useState(false);
    const [editStatu, setEditStatu] =useState(false);
    

    
    const  getAllUser  = async ()=>{

        fetch('https://table-realtions.herokuapp.com/api/member')
        .then(resp=>resp.json())
        .then((data)=>{
            setMembers(data)
        })
    }

    useEffect(()=>{
        getAllUser();
    },[])
    
    
    


    const showData = async()=>{
        members.map((val)=>{
            if(val.email === uEmail){
                
                setAdminId(val.id)
                setEditStatu(true)
            }
        })
    }
    if(editStatu){
        return <Profile adminId={adminId} />
    }
    const  SecondPerson = async (id) =>{
         let  result = await setSecPersonId(id);
        setChatPage(true)
        members.map((val)=>{
            if(val.email === uEmail){
                
                setAdminId(val.id)
               
            }
        })
       
       
    }
    if(chatPage){
        return <Chat adminId={adminId} secPersonId={secPersonId} />
    }

    

    return (
        <div className='container-sm '>
            <Nav showDt={showData} adminId={adminId}/>
           
            <div className='card4 card1 '>
                { members.map((val)=>(
                    <div className='card2 user-info ' >
                       <img src={val.member_img} />
                        {/* <img src='https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg' alt='No img'/> */}
                      
                      <div onClick={()=> SecondPerson(val.id) } >
                        <h4> {val.firstname} </h4>
                        <p> {val.lastname} </p>

                      </div>
                 
                    </div>
                )) }
            </div>
            
           
        </div>
    );
   

};

export default UserList;
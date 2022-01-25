import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import EditProfile from './EditProfile';
import Nav from './Nav';
const Profile = ({proId,adminId}) => {
    const [profInfo, setProfInfo] = useState("");
    const [ProfileImg ,setProfileImg] = useState("");   
    const [editPage, setEditPage] = useState(false)
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

  async function ChangeImg(){
      console.warn(ProfileImg);
     

     fetch(`https://table-realtions.herokuapp.com/api/member/img/${proId}`,{
          method:"PATCH",
          body:JSON.stringify({
            member_img:ProfileImg
          })
      });
      alert("data has been saved");
  }

  function GoToEditiPage(){
    setEditPage(true)
  }
   if(editPage){
       return <EditProfile adminId={adminId}/>
   }
    return (
        <div className='container'>
            <Nav/>
             <div className='card text-center'>
              <img  src={profInfo.member_img} alt='No img'/>
                <p> { profInfo.firstname} { profInfo.lastname} </p>
                <br/>
                <br/>
                <form className='container-sm'>
                    <div className='setting' >
                        
                      <input className='border-0' type="text" value={"Name : " + profInfo.firstname}/> 
                    </div>
                    <div className='setting' >
                       
                        <input className='border-0' type="text" value={"Last Name : " + profInfo.lastname}/> 
                    </div>
                    <div className='setting' >
                       
                        <input className='border-0' type="text" value={"Email : "+  profInfo.email}/> 
                    </div> 
                      <div className='setting' >
                        <input className='border-0' type="text" value={"Brithday : " +profInfo.brithdate}/> 
                    </div> 
                    <div className='setting' >
                        <input className='border-0' type="text" value={"Rsecret : " +profInfo.Rsecret}/> 
                    </div> 
                    <div className='setting' >
                        <p onClick={GoToEditiPage} ><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-setting-basic-ui-elements-flatart-icons-outline-flatarticons.png"/>Edit Profile </p> 
                    </div>
                       </form>
            
                
            </div>
            <div className='hide col-sm-6 offset-sm- "'>
            <input onChange={(e)=>setProfileImg(e.target.files[0])} type="file" />
            <button onClick={ChangeImg} className='btn btn-primary'>Change</button>

            </div>
            
     

        </div>
    );
};

export default Profile;
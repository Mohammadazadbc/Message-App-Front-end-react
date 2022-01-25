import React from 'react';
import UserList from './UserList';

const Nav = ({showDt,adminId} ) => {
    console.log(adminId);

    function logoutUser(){
      localStorage.clear();
    }
    function ClicLogo(){
      return <UserList/>
    }
    return (
        <ul class="nav nav-tabs bg-primary text-light">
        <li class="nav-item">
  
        </li>
        <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle border-0" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><img className='menu-icon' src="https://img.icons8.com/stickers/100/000000/menu.png"/></a>
          <ul class="dropdown-menu bg-secondary text-light">
            <li><a onClick={showDt} class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">About App</a></li>
            <li><a class="dropdown-item " href="#">Roles</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li onClick={logoutUser}><a class="dropdown-item " href="/">Logout</a></li>
          </ul>
        </li>
        <li class="nav-item mt-3 fw-bolder ps-5">Chat App</li>
        <a href='/users'> <li class="nav-item mt-2 fw-bolder ps-5"><img title='Add new user' className='menu-icon' src="https://img.icons8.com/ios/50/000000/bbb.png"/>' </li> </a>
       
        
      </ul>
        
    );
};

export default Nav;
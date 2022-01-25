import React from "react";
import {BrowserRouter, Route ,Routes} from "react-router-dom"
import ForgtoPass from "./componenet/ForgtoPass";
import Home from "./componenet/Home";
import Register from "./componenet/Register";
import UserList from "./componenet/User/UserList";
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/register"  element={<Register/>}/>
      <Route path="/users"  element={<UserList/>}/>
      <Route path="/forgot"  element={<ForgtoPass/>}/>
      
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;

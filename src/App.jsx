import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Notification from "./components/notification/Notification";
//import AddUser from "./components/chat/addUser/AddUser";
const App = () => {
  const user = true;
  return (
   
    <div className='container'>
     
      { user ? (
         <>
     <List/>
      <Chat/>
     {/* <AddUser/>*/}
      <Detail/>
      </>
    ):(
    
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
    </Routes>
       
      
    )
}
<Notification/>
    </div>
  )
}

export default App
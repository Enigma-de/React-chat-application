import { useState } from "react"
import"./chatlist.css"
import AddUser from "./addUser/AddUser";
const ChatList =()=>{
    const[addMode,setAddMode]= useState(false);
    return(
       
        <div className="chatlist">
            <div className="search">
                <div className="searchbar">
                  <img src="./search.png" alt="" />
                  <input type="text" placeholder="Search"/>
                </div>
                <img className="add" src={addMode ? "./minus.png" : "./plus.png"} alt="" 
                onClick={()=> setAddMode((prev)=> !prev)}/> {/* When user clicks on add btn , changes to minus icon, initially add is shown i.e on src(condition if false: add and viceversa) */}
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Aayusha Regmi</span>
                <p>Hello friend!</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Aayusha Regmi</span>
                <p>Hello friend!</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Aayusha Regmi</span>
                <p>Hello friend!</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Aayusha Regmi</span>
                <p>Hello friend!</p>
                </div>
            </div>


            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Aayusha Regmi</span>
                <p>Hello friend!</p>
                </div>
            </div>
            

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Aayusha Regmi</span>
                <p>Hello friend!</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Aayusha Regmi</span>
                <p>Hello friend!</p>
                </div>
            </div>
            {addMode && <AddUser/>}
        </div>

        
    )
}
export default ChatList
import "./addUser.css"
const AddUser = () =>{
return(
    <div className="add-user">
        <div className="add-by-name">
            <input type="text" className="input-name" name="addusername" placeholder="Username" />
            <input type="button" className="input-search-btn" value="Search" />
        </div>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>Aayusha Regmi</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
)


}
export default AddUser
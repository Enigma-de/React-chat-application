import "./addUser.css"
const AddUser = () =>{
return(
    <div className="add-user">
        <div className="add-by-name">
            <input type="text" className="input-name" name="addusername" placeholder="Username" />
            <input type="button" className="input-search-btn" value="Search" />
        </div>
    </div>
)


}
export default AddUser
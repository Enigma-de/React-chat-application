import "./detail.css"
const Detail =()=>{
return (
    <div className='detail'>
        <div className="user">
            <img src="./avatar.png" alt="" srcset="" />
            <h2>Aayusha Regmi</h2>
            <p>Lorem ipsum dolor sit  </p>
        </div>
        <div className="info">
            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="" srcset="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Privacy % help</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Shared Photos</span>
                    <img src="./arrowDown.png" alt=""  />
                </div>
            </div>
<div className="photos">
    <div className="photoItem">
        <div className="photoDetail">
        <img src="image1.png" alt="" />
        <span>photo_202.jpg</span>
    </div>
    <img src="./download.png" alt="" />
</div>

<div className="photoItem">
        <div className="photoDetail">
        <img src="image1.png" alt="" />
        <span>photo_202.jpg</span>
    </div>
    <img src="./download.png" alt="" />
</div>

<div className="photoItem">
        <div className="photoDetail">
        <img src="image1.png" alt="" />
        <span>photo_202.jpg</span>
    </div>
    <img src="./download.png" alt="" />
</div>

<div className="photoItem">
        <div className="photoDetail">
        <img src="image1.png" alt="" />
        <span>photo_202.jpg</span>
    </div>
    <img src="./download.png" alt="" />
</div>



</div>    
            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="" srcset="" />
                </div>
            </div>
            <button>Block User</button>
            <button className="logout">LogOut</button>
        </div>
    </div>
)
}
export default Detail
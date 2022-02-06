
import title from './../../assets/icon/setting.png';
import menu from './../../assets/icon/icon1.png';
import exit from './../../assets/icon/icon2.png';
// style
import './user.scss';
import { useState } from 'react';

function User(){

    const [m, setMenu] = useState("menu");
    const [e, setExit] = useState("disable");

    return(
        <div className="user">
            <div className="login--title">
                <img src={title} alt="title" />
                <h1>User <br />Management</h1>
            </div>
            <div className="slogan">
                <h1>Thông tin cá nhân</h1>
            </div>
            <div className='user--main'>
                <div className='div'>
                    <p>username</p>
                    <p>{localStorage.getItem("username")}</p>
                </div>
                <hr />
                <div className='div'>
                    <p>email</p>
                    <p>{localStorage.getItem("email")}</p>
                </div>
                <hr />
                <div className='div'>
                    <p>telephone</p>
                    <p>{localStorage.getItem("telephone")}</p>
                </div>
                <hr />
                <div className='div'>
                    <p>address</p>
                    {
                        localStorage.getItem("address")?(
                            <p>{localStorage.getItem("address")}</p>
                        ):(<p>null</p>)
                    }
                </div>
                <hr />
                <div className='div'>
                    <p>brithday</p>
                    {
                        localStorage.getItem("birthday")?(
                            <p>{localStorage.getItem("birthday")}</p>
                        ):(<p>null</p>)
                    }
                </div>
                <hr />
                <div className='div'>
                    <p>gender</p>
                    {
                        localStorage.getItem("gender")?(
                            <p>{localStorage.getItem("gender")}</p>
                        ):(<p>null</p>)
                    }
                </div>
                <hr />
                <div className='div'>
                    <p>status</p>
                    <p>{localStorage.getItem("status")}</p>
                </div>
            </div>
            <div className={m}>
                <img src={menu} alt="menu" onClick={() => {
                    setMenu("disable");
                    setExit("exit");
                }} />
            </div>
            <div className={e}>
                <img src={exit} alt="menu" onClick={() => {
                    setMenu("menu");
                    setExit("disable");
                }} />
                <div className='menu--setting'>
                    <button onClick={() => {window.location.href = "update-user"}}>Setting</button>
                    <button onClick={() => {localStorage.clear(); window.location.href = "/"}}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default User;
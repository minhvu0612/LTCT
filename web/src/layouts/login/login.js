
// icon
import { useState } from "react";
import { login_user } from "../../api/login";
import { setLocal } from "../../api/setLocal";
import title from "./../../assets/icon/setting.png";

// style
import './login.scss';

function Login(){

    const [username, setU] = useState("");
    const [password, setPW] = useState("");

    // alert 
    const [success, setS] = useState("disable");
    const [fail, setF] = useState("disable");

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password,
        }
        //console.log(data);
        
        await login_user(data)
        .then(
            (res) => {
                if (res.data.status == 200){
                    setS("success");
                    setTimeout(() => {
                        setS("disable");
                    }, 1000);
                    setLocal(res.data.data);
                    if (localStorage.getItem("role") == "user"){
                        window.location.href = "/home-user";
                    }
                    else{
                        window.location.href = "/home-admin";
                    }
                }
                else{
                    setF("fail");
                    setTimeout(() => {
                        setF("disable");
                    }, 1000);
                }
            }
        )
    }

    return(
        <div className="login">
            <div className="login--main">
                <div className="login--title">
                    <img src={title} alt="title" />
                    <h1>User <br />Management</h1>
                </div>
                <div className="slogan">
                    <h1>Quản lý người dùng</h1>
                </div>
                <form className="form" onSubmit={(e) => handleLogin(e)}>
                    <input type="text" required placeholder="Username" onChange={(e) => setU(e.target.value)} /><br />
                    <input type="password" required minLength="6" placeholder="Password" onChange={(e) => setPW(e.target.value)} />
                    <button>Log In</button>
                    <div className="other">
                        <p>Don't have an acccount? <span onClick={() => {window.location.href = "/signup"}}>Sign Up Here</span></p>
                    </div>
                </form>
            </div>
            <div className={fail}>Username or Password invalid</div>
            <div className={success}>Successfully!</div>
        </div>
    );
}

export default Login;
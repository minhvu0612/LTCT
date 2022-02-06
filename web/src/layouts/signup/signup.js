
import { useState } from "react";
import { setLocal } from "../../api/setLocal";
import { signup_user } from "../../api/signup";
import title from "./../../assets/icon/setting.png";

import "./../login/login.scss";

function Signup(){

    const [username, setU] = useState("");
    const [email, setE] = useState("");
    const [phone, setPN] = useState("");
    const [password, setPW] = useState("");
    const [confirm, setC] = useState("");

    // alert
    const [success, setS] = useState("disable");
    const [fail, setF] = useState("disable");
 

    const handleSignup = async (e) => {
        e.preventDefault();
        const data = {
            username: username,
            email: email,
            phone: phone,
            password: password,
            rePassword: confirm,
        }
        console.log(data);

        await signup_user(data)
        .then(
            (res) => {
                console.log(res.data);
                if (res.data.status == 201){
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
                <form className="form form--signup" onSubmit={(e) => handleSignup(e)}>
                    <div className="div">
                        <input type="text" placeholder="Username" onChange={(e) => setU(e.target.value)} />
                        <input type="email" placeholder="Email" onChange={(e) => setE(e.target.value)} />
                    </div>
                    <div className="div">
                        <input type="text" placeholder="Phone" onChange={(e) => setPN(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={(e) => setPW(e.target.value)} />
                    </div>
                    <div className="div">
                        <input type="password" placeholder="Confirm" style={{width: 30 + "%"}} onChange={(e) => setC(e.target.value)} />
                    </div>
                    <button className="signup--btn">Signup</button>
                    <div className="other">
                        <p>Don't have an account? <span onClick={() => {window.location.href = "/"}}>Log In Here</span></p>
                        <p>Register admin account? <span onClick={() => {window.location.href = "/admin"}}>Admin</span></p>
                    </div>
                </form>
            </div>
            <div className={fail}>Error!</div>
            <div className={success}>Successfully!</div>
        </div>
    );
}

export default Signup;



import title from './../../assets/icon/setting.png';
import menu from './../../assets/icon/icon1.png';
import exit from './../../assets/icon/icon2.png';


import { useState } from 'react';
import './update.scss';
import { get_user_infor, update_infor } from '../../api/user';
import { setLocal } from '../../api/setLocal';


function Update(){

    const [m, setMenu] = useState("menu");
    const [e, setExit] = useState("disable");


    // set data
    const [name, setU] = useState("");
    const [email, setE] = useState(localStorage.getItem("email"));
    const [phone, setP] = useState(localStorage.getItem("telephone"));
    const [address, setA] = useState(localStorage.getItem("address"));
    const [birthday, setB] = useState(localStorage.getItem("birthday"));
    const [gender, setG] = useState(localStorage.getItem("gender"));

    const handleUpdate = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            gender: gender,
            address: address,
            birthday: birthday,
            phone: phone,
            email: email,
            userId: localStorage.getItem("_id"),
        }
        console.log(data);
        await update_infor(data).then(
            async (res) => {
                if (res.data.status == 200){
                    setLocal(data);
                    localStorage.setItem("telephone", phone);
                    window.location.href = "/home-user";
                }
            }
        );
    }

    return(
        <div className="update">
            <div className="login--title">
                <img src={title} alt="title" />
                <h1>User <br />Management</h1>
            </div>
            <div className="slogan">
                <h1>Chỉnh sửa thông tin</h1>
            </div>
            <div className='update--main'>
                <form onSubmit={(e) => handleUpdate(e)}>
                    <input type="text" placeholder='Name'  onChange={(e) => setU(e.target.value)} />
                    <input type="email" placeholder='Email' defaultValue={email} onChange={(e) => setE(e.target.value)} />
                    <input type="text" placeholder='Telephone' defaultValue={phone} onChange={(e) => setP(e.target.value)} />
                    <input type="text" placeholder='Address' defaultValue={address} onChange={(e) => setA(e.target.value)} />
                    <input type="date" placeholder='Brithday' defaultValue={birthday} onChange={(e) => setB(e.target.value)} />
                    <select defaultValue={gender} onChange={(e) => setG(e.target.value)}>
                        <option value="">No choose</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input type="reset" className='clear--btn' />
                    <button className='submit--btn'>Submit</button>
                </form>
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
                    {
                        (localStorage.getItem("role") == "user")?(
                            <button className='user--btn current--btn' onClick={() => {window.location.href = "/home-user"}}>Home</button>
                        ):
                        (
                            <button className='user--btn current--btn' onClick={() => {window.location.href = "/home-admin"}}>Home</button>
                        )
                    }
                    <button className='user--btn current--btn' onClick={() => {window.location.href = "/update-user"}}>Setting</button>
                    <button onClick={() => {localStorage.clear(); window.location.href = "/"}}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Update;

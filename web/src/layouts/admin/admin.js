import { useEffect, useState } from "react";
import { get_allusers, get_user } from "../../api/admin";
import title from './../../assets/icon/setting.png';
import menu from './../../assets/icon/icon1.png';
import exit from './../../assets/icon/icon2.png';

import './admin.scss';

function Admin(){

    const [all_user, setAllUser] = useState([]);
    const [search_user, setSearchUser] = useState([]);

    //search value
    const [value, setValue] = useState("");

    const [class_all, setAll] = useState("all_user");
    const [class_search, setSearch] = useState("disable");

    // menu
    const [m, setMenu] = useState("m");
    const [e, setExit] = useState("disable");

    useEffect(async () => {
        await get_allusers()
        .then(
            (res) => setAllUser(res.data.data)
        )
    }, []);

    const SearchUser = async (e) => {
        if (value != null && value != ""){
            setSearch("search_user");
            setAll("disable");
            await get_user({phone: value})
            .then(
                (res) => setSearchUser([res.data.data])
            )
        }
        else{
            setSearch("disable");
            setAll("all_user");
        }
    }

    const Result = (e, i) => {
        if (e.status == "active"){
            return (
                  <tr>
                    <td> {e._id}</td>
                    <td> {e.username}</td>
                    <td> {e.email} </td>
                    <td> {e.gender}</td>
                    <td> {e.telephone}</td>
                    <td className="text-danger"> active</td>
                    <td>
                      <button type="button" class="btn btn-inactive">
                        inactive
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-block">
                        block
                      </button>
                    </td>
                  </tr>
            );
        }
        else{
          return (
              <tr>
                <td> {e._id}</td>
                <td> {e.username}</td>
                <td> {e.email} </td>
                <td> {e.gender}</td>
                <td> {e.telephone}</td>
                <td className="text-success"> inactive</td>
                <td>
                  <button type="button" class="btn btn-active">
                    active
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-block">
                    block
                  </button>
                </td>
              </tr>
            );
        }
    }

    const Search = (e, i) => {
        if (e.status == "active"){
            return (
                  <tr>
                    <td> {e._id}</td>
                    <td> {e.username}</td>
                    <td> {e.email} </td>
                    <td> {e.gender}</td>
                    <td> {e.telephone}</td>
                    <td className="text-danger"> active</td>
                    <td>
                      <button type="button" class="btn btn-inactive">
                        inactive
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-block">
                        block
                      </button>
                    </td>
                  </tr>
            );
        }
        else{
          return (
              <tr>
                <td> {e._id}</td>
                <td> {e.username}</td>
                <td> {e.email} </td>
                <td> {e.gender}</td>
                <td> {e.telephone}</td>
                <td className="text-success"> inactive</td>
                <td>
                  <button type="button" class="btn btn-active">
                    active
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-block">
                    block
                  </button>
                </td>
              </tr>
            );
        }
    }

    return(
        <div className="admin">
            <div className="search">
                <img src={title} alt="title" />
                <input type="text" placeholder="search by phone" 
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => {if (e.key == "Enter"){SearchUser(e)}}} />
                <p>{localStorage.getItem("username")}</p>
                <div className={m}>
                    <img src={menu} alt="menu" onClick={() => {
                        setMenu("disable");
                        setExit("e");
                    }} />
                </div>
                <div className={e}>
                    <img src={exit} alt="menu" onClick={() => {
                        setMenu("m");
                        setExit("disable");
                    }} />
                    <div className='menu--setting'>
                        <button onClick={() => {window.location.href = "update-user"}}>Setting</button>
                        <button onClick={() => {localStorage.clear(); window.location.href = "/"}}>Logout</button>
                    </div>
                </div>
            </div>
            <table className={class_all}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th style={{width: 150 + "px"}}>Username </th>
                        <th style={{width: 200 + "px"}}>Email</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {all_user?
                    all_user.map((e, i) => {
                        if (e.role == "user"){
                            return Result(e,i);
                        }
                    })
                    :null}
                </tbody>
            </table>
            <table className={class_search}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th style={{width: 150 + "px"}}>Username </th>
                        <th style={{width: 200 + "px"}}>Email</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {search_user?
                    search_user.map((e, i) => {
                        if (e.role == "user"){
                            return Search(e,i);
                        }
                    })
                    :null}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
import {useState as state, useEffect} from 'react';

import http from "../plugins/Fetch";
import UserCard from "../components/UserCard";

function Users({  }) {
    const [users, setUsers] = state([])

    useEffect(() => {
        http.get('/users').then(res => {
            setUsers(res.users);
        })
    }, [])

    return (
        <div className="d-flex flex-wrap">
            {users.map((item, index) =>
                <UserCard  key={index} user={item}/>
            )}
        </div>
    );
}

export default Users;
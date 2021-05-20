import {useState as state, useEffect} from 'react';
import {useParams} from "react-router-dom";
import http from "../plugins/Fetch";
import { useHistory } from "react-router-dom";

function SingleUser() {
    const { id } = useParams()
    const [name, setName] = state('')
    const [age, setAge] = state()
    const [email, setEmail] = state('')
    const [password, setPassword] = state('')
    const history = useHistory();

    function changeRoute() {
        history.push('/users')
    }

    useEffect(() => {
        http.get('/singleUser/' + id).then(res => {
            console.log(res)
            const { name, age, email, password } = res.user;
            setName(name);
            setAge(age);
            setEmail(email);
            setPassword(password)
        })
    }, [])

    const deleteUser = () => {
            http.delete('/deleteUser/' + id).then(res => {
                console.log(res);
                if(!res.success) {
                    alert(res.message)
                } else if (res.success === true) {
                    changeRoute();
                }
            })
    }

    const updateUser = () => {
        http.put('/updateUser/' + id, { name, age, email, password }).then(res => {
            console.log(res);
            if(!res.success) {
                alert(res.message)
            } else if (res.success === true) {
                changeRoute();
            }
        })
    }

    return (
        <div className="d-flex">
            <div className="uploadForm">
                <input onChange={(e) => setName(e.target.value)} value={name}  type="text" placeholder="Vardas"/>
                <input onChange={(e) => setAge(e.target.value)} value={age}  type="number" placeholder="Amžius"/>
                <input onChange={(e) => setEmail(e.target.value)} value={email}  type="text" placeholder="El. paštas"/>


                <input onChange={(e) => setPassword(e.target.value)} value={password}  type="password" placeholder="Slaptažodis"/>
                <button  onClick={() => updateUser()}>Atnaujinti vartotojo informaciją</button>
                <button className="mt-20" onClick={() => deleteUser()}>Ištrinti Paskyrą</button>
            </div>
        </div>
    );
}

export default SingleUser;
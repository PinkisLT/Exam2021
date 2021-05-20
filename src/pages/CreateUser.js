import {useState as state} from 'react';
import Http from "../plugins/Fetch";
import {useHistory} from "react-router-dom";

const CreateUser = () => {
    const [name, setName] = state('')
    const [age, setAge] = state()
    const [email, setEmail] = state('')
    const [password, setPassword] = state('')
    const history = useHistory();

    function changeRoute() {
        history.push('/users')
    }

    function upload() {
        const user = {
            name,
            age,
            email,
            password
        }
        Http.post('/addUser', user)
            .then(res => {
                if(!res.success) {
                    alert(res.message);
                } else if (res.success === true) {
                    changeRoute();
                }
            })
    }

    return <div className="d-flex">
        <div className="uploadForm">
            <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Vardas"/>
            <input onChange={(e) => setAge(e.target.value)}  type="number" placeholder="Amžius"/>
            <input onChange={(e) => setEmail(e.target.value)}  type="text" placeholder="El. paštas"/>
            <input onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Slaptažodis"/>
            <button onClick={() => upload()}>Sukurti Paskyrą</button>
        </div>
    </div>
}

export default CreateUser;

import axios from 'axios';
import { useEffect, useState, } from 'react';
import './App.css';
import UserForms from './Componentes/UserForms';
import Userslist from './Componentes/Userslist';

function App() {
    const [users, SetUsers] = useState([])
    const [selectUser, setSelectUser] = useState(null);
    
    useEffect( () => {
      axios.get("https://users-crud1.herokuapp.com/users/")
        .then( res => SetUsers(res.data))
    }, []);
    console.log(users)

    
    const getUser = () =>{
      axios.get("https://users-crud1.herokuapp.com/users/")
        .then( res => SetUsers(res.data))
    };

      const removeUser = id => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then( ()=> getUser());
      }
      const Userselect = user => setSelectUser(user);
      
      // console.log(selectUser)
  return (
    <div className="App">
    <UserForms getUser={getUser} selectUser={selectUser} />
    <Userslist users = {users} Userselect={Userselect}removeUser={removeUser}/>
    </div>
  );
}

export default App;

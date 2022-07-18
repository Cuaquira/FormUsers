
import axios from 'axios';
import { useEffect, useState, } from 'react';
import './App.css';
import styled from 'styled-components';
import UserForms from './Componentes/UserForms';
import Userslist from './Componentes/Userslist';

function App() {
    const [users, SetUsers] = useState([])
    const [selectUser, setSelectUser] = useState(null);
    const [modal, setModal] = useState(false);
    
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
      <ContenedorBotones>
      <Boton onClick={() => setModal(!modal)}>Open</Boton>
        { modal && <UserForms open={modal} close={setModal} getUser={getUser} selectUser={selectUser} /> }
      </ContenedorBotones>
                
     
    
    <Userslist users = {users} Userselect={Userselect}removeUser={removeUser}/>
    </div>
  );
}

export default App;

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
`;

const Boton = styled.div`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: black;
  border: none;
  background: #f2f2f2;
  &:hover{
    background: "0066FF;
  }
`;

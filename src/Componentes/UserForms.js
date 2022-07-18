import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UserForms = ({ getUser, selectUser, open, close }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");

    console.log(selectUser);
    useEffect(() => {
        if (selectUser != null) {
            setEmail(selectUser.email)
            setPassword(selectUser.password)
            setFirstName(selectUser.first_name)
            setLastName(selectUser.last_name)
            setBirthday(selectUser.birthday)
        }
    }, [selectUser])

    const submit = e => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            birthday: birthday,
        }

        if (selectUser !== null) {
            axios.put(`https://users-crud1.herokuapp.com/users/${selectUser.id}/`, user)
                .then(() => getUser());
        } else {
            axios.post("https://users-crud1.herokuapp.com/users/", user)
                .then(() => getUser());
        }

    }


    return (
        <>
            <Overlay>
                <ContenedorModal>
                    <EncabezaModal>
                        <h1>LIST USERS</h1>

                        <Boton onClick={() => close(false)}>X</Boton>

                    </EncabezaModal>

                    <form onSubmit={submit}>
                        <h1 className='title'><b>New User</b></h1>
                        <div className='d-flex'>
                            <div class="mb-3 w-50 pr-2">
                                <label htmlFor="firstname" className="form-label"><i className="fa-solid fa-user"></i></label>
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    className="form-control"
                                    id="firstname"
                                    onChange={e => setFirstName(e.target.value)}
                                    value={firstName} />
                            </div>
                            <div class="mb-3 w-50">
                                <label htmlFor="lastname" className="form-label"></label>
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    className="form-control"
                                    id="lastname"
                                    onChange={e => setLastName(e.target.value)}
                                    value={lastName} />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="birthday" className="form-label"><i class="fa-solid fa-cake-candles"></i></label>
                            <input
                                type="date"
                                className="form-control"
                                id="birthday"
                                onChange={e => setBirthday(e.target.value)}
                                value={birthday} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="email" className="form-label"><i class="fa-solid fa-envelope"></i></label>
                            <input
                                type="email"
                                placeholder='email'
                                className="form-control"
                                id="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label htmlFor="password" className="form-label"><i class="fa-solid fa-lock"></i></label>
                            <input
                                type="password"
                                placeholder='password'
                                className="form-control"
                                id="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </ContenedorModal>


            </Overlay>

        </>

    );
};

export default UserForms;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0, .5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 300px;
    background: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    `;

    const EncabezaModal = styled.div`
    display: flex;

   
`;

const Boton =styled.button`
    position: relative;
    left: 50%;
    height: 50px;
    width: 30px;
    border: none;
    background: #f2f2f2;
    &:hover{
        background: red ;
    }
`;
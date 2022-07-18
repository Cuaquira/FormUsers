import React from 'react';

const Userslist = ( {users, Userselect, removeUser}) => {
    return (
        <div>
            <ul className='list-group'>
                {
                    users.map(user =>(
                        <li key={user.id} className="Cardlist">
                            <h2 className='list'>{user.first_name + " " + user.last_name}</h2>
                            <p className='listemail'><b>Email: </b>{user.email}</p>
                            <p className='listbirthday'><b>Birthday: </b>{user.birthday}</p>
                            <div className='Button'>
                            <button onClick={()=> Userselect(user)} className='btn btn-warning'>
                                Edit
                            </button>

                            <button onClick={() => removeUser(user.id)} className='btn btn-danger'>
                                Delete
                            </button>
                            </div>
                        </li>

                    ))
                }
            </ul>
        </div>
    );
};

export default Userslist;
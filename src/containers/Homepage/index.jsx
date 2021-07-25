import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selector';
import axios from 'axios';
import { useEffect } from 'react';
import { setUsers } from './actions';
import { UserList } from './userList';

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}));

const actionDispatch = (dispatch) => ({
     setUser: (users) => dispatch(setUsers(users))
})

export function HomePage() {

    const { users } = useSelector(stateSelector);
    const {setUser} = actionDispatch(useDispatch());

    const fetchUsers = async() => {
        const response = await axios.get('https://reqres.in/api/users').catch((err) => console.log("error===", err));
        setUser(response.data.data);
    }

    useEffect(() => {
         fetchUsers();
    }, []);

    console.log(" ===== Users ===", users);
    

    return <div><UserList /></div>
}
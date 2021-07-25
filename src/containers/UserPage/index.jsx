import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setUser } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUser } from './selector';
import styled from 'styled-components';

const UsersContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const UserWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const UserImage = styled.div`
width: 7em;
height: 7em;

img {
    width: 100%;
    height: 100%;
}
`;

const UserName = styled.h3`
font-size: 20px;
color: #000;
margin: 0;
`;

const UserEmail = styled.h3`
font-size: 20px;
color: #000;
margin: 0;
`;

const actionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
})

const stateSelector = createSelector(makeSelectUser, (user) => ({
    user
}))

export function UserPage() {

    const { setUser } = actionDispatch(useDispatch());
    const { user } = useSelector(stateSelector);
    const { userId } = useParams();


    const fetchUser = async (id) => {
        const response = await axios.get(`https://reqres.in/api/users/${id}`).catch((err) => console.log("=== error ===", err));

        if (response) {
            setUser(response.data.data);
        }
    }

    useEffect(() => {
        console.log("=== user id ====", userId);
        if (userId && userId !== "") {
            fetchUser(userId)
        }
    }, [userId])


    if (!user) {
        return (
            <h2>Loding ...</h2>
        )
    }

    return (
        <UsersContainer>
            <UserWrapper>
                <UserImage>
                    <img src={user.avatar} />
                </UserImage>
                <UserName>
                    {user.first_name} {user.last_name}
                </UserName>
                <UserEmail>
                    {user.email}
                </UserEmail>
            </UserWrapper>
        </UsersContainer>
    )
}
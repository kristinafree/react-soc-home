import React from 'react';
import profileReducer, { addPostActionCreator } from './profile-reducer';
import ReactDOM from 'react-dom';
import App from '../App'

it ('length of posts should be incremented', () => {
    let action = addPostActionCreator('LOLOLO');
    let state = {
        posts: [
            {id: 1, message: 'This, super post!', likesCount: 12},
            {id: 2, message: 'Liza super cat!', likesCount: 11}
        ],
    };
    //1. test data

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
})
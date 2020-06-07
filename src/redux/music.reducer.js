import { musicAPI } from "../api/api";


const PLAY = 'PLAY';
const STOP = 'STOP';

let initialState = {
    playlist: [],
};

const musicReducer = (state = initialState,action) => {
    
    switch(action.type) {
        case PLAY:
           return {
                ...state,
                playlist: state.playlist.map(m => {
                    if (m.id === action.musicId) {
                        return {...m, followed: true}
                    }
                    return m;
                })
            }
        case STOP:
            return {
                ...state,
                playlist: state.playlist.map(m => {
                    if (m.id === action.musicId) {
                        return {...m, followed: false}
                    }
                    return m;
                })
            }
        default:
            return state;
    }
}

export const play = (musicId) => ({type: PLAY, musicId}) 
export const stop = (musicId) => ({ type: STOP, musicId})

export default musicReducer;
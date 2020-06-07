import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'This, super post!', likesCount: 12},
                {id: 2, message: 'Liza super cat!', likesCount: 11}
            ],
            newPostText: 'new Post'
        },
        
        dialogsPage: {
            dialogs:[
                {id: 1, name: 'Liza'},
                {id: 2, name: 'Yanina'},
                {id: 3, name: 'Tanya'},
                {id: 4, name: 'Sergey'},
                {id: 5, name: 'Kris'},
                {id: 6, name: 'Yura'},
            ],
    
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Your name"},
                {id: 3, message: "Love"},
                {id: 4, message: "Love"},
                {id: 5, message: "Love"},
                {id: 6, message: "Love"},
            ],
            newMessageBody: "" 
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log ('State chanched')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
 



const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body} ]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: 'SEND_MESSAGE', newMessageBody}) 

export default dialogsReducer;
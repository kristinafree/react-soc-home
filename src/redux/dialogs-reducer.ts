import { type } from "os";

const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs:[
        {id: 1, name: 'Liza'},
        {id: 2, name: 'Yanina'},
        {id: 3, name: 'Tanya'},
        {id: 4, name: 'Sergey'},
        {id: 5, name: 'Kris'},
        {id: 6, name: 'Yura'},
    ] as Array<DialogType>,

    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Your name"},
        {id: 3, message: "Love"},
        {id: 4, message: "Love"},
        {id: 5, message: "Love"},
        {id: 6, message: "Love"},
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) => {
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

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: 'SEND_MESSAGE', newMessageBody}) 

export default dialogsReducer;
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import AddMessageForm from './AddMessageForm/AddMessageForm';


const Dialogs = (props) => {

let state = props.dialogsPage;

let dialogsElements = state.dialogs.map( d => <DialogItem name = {d.name} key = {d.id} id = {d.id} /> )
let messagesElements = state.messages.map(m => <Message message = {m.message} key = {m.id} />)
let newMessageBody = state.newMessageBody;

let newDialogElement = React.createRef();

let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
 }

//if (!props.isAuth) return <Redirect to = {"/login"} />
;
return (
    <div className = {s.dialogs}>
        <div className = {s.dialogsItems}>
            {dialogsElements}
            {/* <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id} />
            <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id} /> */}
            {/* <div className = {s.dialog}>
                <NavLink to = "/dialogs/2">Yanina</NavLink>
            </div>
            <div className = {s.dialog}>
                <NavLink to = "/dialogs/3">Kris</NavLink>
            </div>
            <div className = {s.dialog}>
                <NavLink to = "/dialogs/4">Tanya</NavLink>
            </div>
            <div className = {s.dialog}>
                <NavLink to = "/dialogs/5">Sergey</NavLink>
            </div> создали компонент сократив код,строки выше*/}
        </div>
        <div className = {s.messages}>
            <div>{messagesElements}</div>
            {/* <Message message = {messagesData[0].message} />
            <Message message = {messagesData[1].message} /> */}
            <div>
                <AddMessageForm onSubmit = {addNewMessage} />
            </div>
        </div>
    </div>
)
}

export default Dialogs;
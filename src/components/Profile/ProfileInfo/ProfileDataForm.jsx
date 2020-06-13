import React from 'react';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import s from "./ProfileInfo.module.css";
import style from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit = {handleSubmit}>
    <div style={{color: "000"}}><button>save</button></div>
    {error && <div className = {style.formSummaryError}>
        {error}
    </div>
    }
    <div>
        Full name: {createField("Full name", "fullName", [], Input)}
    </div>
    <div>
        Looking for a job: { createField("", "lookingForAJob", [] , Input, {type: "checkbox"} )}
    </div>
    <div>
        My professional skills: 
        { createField("My professional skills", "lookingForAJobDescription", [] , Textarea )}
    </div>
    <div>
        About me:
        { createField("About me", "aboutMe", [] , Textarea )}
    </div>
    <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>{
            return <div key = {key} className = {s.contact}>
                <b>{key} : { createField(key, "contacts." + key, [], Input) }</b>
            </div>
        })}
    </div>
    </form>
}

const ProfileDataFormRedaxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormRedaxForm;
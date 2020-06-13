import React, { useState, useEffect } from 'react';
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }
    
    const deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
  
    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status:</b><span onDoubleClick ={activateEditMode}> {props.status || <img style={{width: "20px", height: "20px"}} src={'https://image.flaticon.com/icons/svg/3035/3035659.svg'} />} </span>
                </div>
            }
            {editMode && 
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                        value={status}/>
                </div>
            }
        </div>
    ) 
    
}

export default ProfileStatusWithHooks;
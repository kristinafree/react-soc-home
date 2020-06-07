import React from 'react';
import MyPostsConteiner from './MyPosts/MyPostsConteiner'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div>
          <ProfileInfo  savePhoto = {props.savePhoto} 
                        isOwner = {props.isOwner} 
                        profile = {props.profile} 
                        status = {props.status} 
                        saveProfile = {props.saveProfile}
                        updateStatus = {props.updateStatus}/>
          <MyPostsConteiner />
        </div>
    )
}

export default Profile;
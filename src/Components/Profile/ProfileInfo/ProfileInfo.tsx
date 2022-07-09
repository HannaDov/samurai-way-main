import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileAPIType} from "../../../redux/reducerPropfilePage";
import {Preloader} from "../../common/preloader/preloader";

export type ProfileType= {
    profile:ProfileAPIType
}
export const ProfileInfo = (props:ProfileType) => {

    if (Object.keys(props.profile).length === 0){
        return <Preloader/>
    }

    return (<div>

            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiib6KtY7kL1FtSwPBibH4H9cbZSaLwenwWw&usqp=CAU"/>
            </div>
            <div className={classes.descriptionBlock}>
               <img src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}
                   <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.fullName}</div>
                </div>
                ava+discription
            </div>
        </div>
    )
}
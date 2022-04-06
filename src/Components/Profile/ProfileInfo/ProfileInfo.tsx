import React from 'react';
import classes from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (<div>

            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFRnZ74gkvylB7jhhqlvOrUI3xOONxwCukA&usqp=CAU"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+discription
            </div>
        </div>
    )
}
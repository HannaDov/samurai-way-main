import React from 'react';
import classes from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (<div>

            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiib6KtY7kL1FtSwPBibH4H9cbZSaLwenwWw&usqp=CAU"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+discription
            </div>
        </div>
    )
}
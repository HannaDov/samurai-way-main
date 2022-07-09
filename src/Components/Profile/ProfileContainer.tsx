import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileAPIType, setUsersProfile} from "../../redux/reducerPropfilePage";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";



class ProfileAPIContainer extends React.Component <ProfileType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {

            this.props.setUsersProfile(response.data);

        })

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>


            </div>

        )
    }

}
export type mapStateToPropsType = {
    profile:ProfileAPIType
}
export type mapDispatchToPropsType = {
    setUsersProfile:(profile:ProfileAPIType)=>void
}
 type ProfileType=mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
      profile:state.ProfilePage.profile
    }
}
export const ProfileContainer = connect(mapStateToProps,  {
    setUsersProfile})(ProfileAPIContainer)
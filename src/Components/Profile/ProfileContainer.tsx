import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileAPIType, setUsersProfile} from "../../redux/reducerPropfilePage";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
   userId: string,
}


type PropsType = RouteComponentProps<PathParamsType> & ProfileType

class ProfileAPIContainer extends React.Component <PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId="2";
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {

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
    profile: ProfileAPIType
}
export type mapDispatchToPropsType = {
    setUsersProfile: (profile: ProfileAPIType) => void
}
type ProfileType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile
    }
}

let withURLDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {
    setUsersProfile
})(withURLDataContainerComponent)
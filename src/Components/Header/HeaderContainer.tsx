import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import axios from "axios";
import {AuthDataType,/*AuthDataType,*/ setAuthUserData} from "../../redux/authReducer";
import {Header} from "./Header";


class HeaderAuthContainer extends React.Component <HeaderType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true

        }).then(response => {

            if (response.data.resultCode === 0)
            {
                this.props.setAuthUserData(response.data.data)}

        })
    }

    render() {

        return <>

            <Header {...this.props} isAuth={this.props.isAuth} data={this.props.data}/>
        </>
    }
}

export type mapStateToPropsType = {
    data: AuthDataType
    isAuth: boolean,

}
export type mapDispatchToPropsType = {
    setAuthUserData: (data: AuthDataType) => void,
}
export type HeaderType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {

        isAuth: state.auth.isAuth,
        data: state.auth.data

    }
}
export const HeaderContainer = connect(mapStateToProps,
    {setAuthUserData})(HeaderAuthContainer)

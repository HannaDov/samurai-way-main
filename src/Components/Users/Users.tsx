import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/reducerUsers";
import {AppStateType} from "../../redux/redux-store";
import styles from './Users.module.css';
import axios, {AxiosResponse} from "axios";
import UserPhoto from "../image/images.png"


export type ResponseType = {
    items:Array<UserType>,
    totalCount:number,
    error:string
}


export const Users = () => {
    const users =useSelector<AppStateType, Array<UserType>>(state=>state.usersPage.users)
    const dispatch = useDispatch<Dispatch>()

    const follow = (userId: number) => {
        dispatch(followAC(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowAC(userId))
    }

    const setUsers = (users: Array<UserType>) => {

        dispatch(setUsersAC(users))
    }
   if (users.length === 0) {

       axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
           setUsers(response.data.items)})

   }
    return (<div>
            {users.map(el=><div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small !=null ?el.photos.small : UserPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ?<button onClick={()=>unfollow(el.id)}>Unfollow</button>
                            :<button onClick={()=>follow(el.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                </span>
            </div>)}
</div>
    )
}





/*



{
    id: 1,
        followed: true,
    photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWYrT70RGaxAjBIxxrahgDD-plkbjUJFwDQ&usqp=CAU",
    fullName: 'Andrew D.',
    status: 'i am a boss',
    location: {country: 'Belarus', city: 'Minsk'}
},
{
    id: 2,
        photoUrl:'data:image/jpeg;base64,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',
    followed: true,
    fullName: 'Katya K.',
    status: 'i am a boss too',
    location: {country: 'Spain', city: 'Madrid'}
},
{
    id: 3,
        followed: false,
    photoUrl:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUYGBgaGBoaGBgaGBoaGhghGhocGhgaGhgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgEDBQYHBAj/xABAEAACAQIDBQYCCAQEBwEAAAABAgADEQQSIQUxQVFhBiJxkaGxE4EHMlJiwdHh8BRCcoIjkrLiFiQzNFOi8RX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A48FjgSFgsBgJIEYCSIAojwWMIAuksWKI4EBlEYQCx4EAQtGAjBYFYEYCNaSBAS0LRysi0BDFtLGEQiBEm0m0ZVgVhZDCWkSsiBUw1kFZZaQw5QKmEQpL8sQiBTaVkS8iVuICW/dpMiECtRHWQIwgNJAgBGtAkRwILHUQItHWFpNoDrLCIiiWCBAkrJCax1WAgSMFl4p6XO6ejD4cMbeJ57tYHhyEcIrCbBhcGx7zA5NBY8tx63/K8xmLwpRnQ6lWK352JF4HgMgCXESu0CCJN5BhAGiGWWimBWRC0kyLwEaJLmlTQEKyoiXGVOIFd4SdIQKlEcRFlggOkYCKIywHAliyEEsCwJtACMIwECFEdZAEZVgMsyOzcFnPIC12IuNd1h/MegnkoJcidL7L7NTKpZcxUX71ybm28HdfTfygYDGYAUVUAO7sLhAqmw07zrayDXieMppsE77oNBcgAWA4XI7g06zetoUkW9SsQFBvb7R3r1Y7zf5gcZia+AOJUMVNOne4uvffjcKdF4d43PHlAwC4ujVt38mugNgOFhr09+snauyWW7XJvqTbnvuev4S2tsB6jEUQiqug0GYG+8uQbnfrpM9sqnVWlkxIXOtwG33W4sfIi/hA5jiaRBOhE85m8be2SouU+a8r8j5+U0ytTym0DzssCYxMRjAm8LRRJF4EGIRHaIRAi0QiWSGECm0rcS4iVmBXaEnMIQKBHErBliwHAliCKscQLUliypAJcptAkGNeReSIEiWKpJsNYiiejD/WFt+6Bnti7OGYX7zXva3dW2ov9o7tOc6BhKgpJcAs7NYDmTuvz4nz5TW9lEUk7qgvpw3dT87/AP06ZOjh6rt33yXOVQo1ta7gE7tdL8bQPaQKjhnObKdbbr31C+UyTMXbKoHXpyEw5dUzHUIpZR8iRcn5TX9o7YSnkYUXyOTldVK5gNSQQQxHyF+F4HRMLs8ILAeM8G16O48L2Pg1wfcec9mz3K4fP3rBMwuSTa1+NzOf1e1NSq4dnWnQY5AGZQWJ3G1iRztcboHo2gxGZW+stiDzB46cJqG0Gzhrizrv+8LgX8f2ZmdubRAGfrlI6EkFfQ+U16pVzAkeHnAx7GJGK74pMAEmLJBgNeIYEyIE3iNGYytjAgyto5iNAi0mLeEDyrLkErQS1YDrLIgjCBYpjrEWWKIFgkrEWWCAwEzPZzCh6y38edrcbc9DaYhZs3ZPu1CSNLWv4/joIG67Nwils38qd/xI3X+dzDEViXp33A1CT4K35QwuMAUIp0J14Xt3jceQi0bOj33gtY/1oV9zAzWx6CMl2F7m893/AOPRuGyLob6zDbEqMKaEbrTOoxawJ0gexbEEcLW8RaaFiez9DE0zTYEfDd1ABIAI0JtuuRx6zObVwiFiRiXR7WA+IMqC2pybj4m5mvbIoHDI4NX4lyWz3Bvpa+kDnfaXBPh6jUSc6lkcNyHeDX/uPrPNgT32Unuke/5GZLa2O+LXqFt2UL8x3gfW08VHCEKKiAneD5j019YHkqU8pIMVp78cgIzqeVx47pj2MBSYXiybwAQkSDAYxCIxEgwEiNHMraAmXxhIhAqWWAStZYsC2SoigxoFimWCVRlMC5ZYolQMsVoFyDWZ3ZFTvhOgPt+cwdOZLZGKUVAdbgfkvhy8oG14F734DKderE38lW89P8Tkw5qHQsucDxu4PrPM6ZbIut7buWmt/D3mI7R44601vZaFU7/s5bC3IrTJ/u6wNw7O7QUBqZ+sjEEex8CJsFbDrVW2Z1H3HKn/ADDWc+2XhTVRKqEq5QAsN5KgDXn3cvzBmXpbfq4bSumZftod3ip/WA+1dgogIWlUbfqtVwSOuZt810YdqOcsWVCNEJzZbDUluM3EdtMM63FRfC4uPEHWc77T9ohiX+HT+roGcbjzA58B+9AwdQ6FuLkk/l4TZOxyZ0dWG4313kHh7j59JhzTQXsSQqEtdSBqOF94Jt+92d7MOKVNqjmwPev91fz3QMZtOnkdkOoBKk87G2vyt10mBrLlYiZvauIzu7DixNzfu31tbha/tMLWOv7/AHzgVGKZJkEwC8cSoGSTAsLRCZAMgmBDSppYWiNAS371hJhApUSxRESWCAyiODIhAcRkMgCCwLAYmKxGQabzu/OMpmKxL5mJ62HygOuKf7R/ftNg7O02qt3iTYj5biJ4NnbOzKGfupvud5va1vT1mydl2Rq2VFIUAnda+u88emvOBtOEzKqs2/vA36g29Zq1Fy+JZ8t173d5qt0y3+8g8yJui0c1Fz9jKP8ATf0Mw74YBaFYAC5ytwvm+o3X6rD+wc4GX7GU8qZM2Zb3R+DKb5W/PkbjhMttihcbr6cpq/YbaACOp3ZiR08OXCbOtYVCeQgc221s2nnZ2UWsbAaXM8uyMEHTMV/n1UchYb/7psu28IKr5E/mIueQW+bzOXynpwOzhSXKFuCoZ77jfh4WB8oGYx+w0bDENoyIDmGhFgbn3NugmBxuymyU2IuipmKXsC62ygncBmYA9LmbFXx2dNL3qEBeiAkBiOpLHw6iGz6XxcK9P+azlP7Tu9R6wOZ43EISSHBJY6669cvC+/wMxtVlvYEHTgfOezb9CnTYshIFyCu8A3O7hY6m3C01pqhDXEDJsZF5ANwCOUUwGEkxAZMBpF4AyDAi8UxrRXgL++EiEIEII4ERIymA8YCIYwgMJIheSDAlZiEIvci45bpmBMJA2HA7TBNmQHQ5bk6aci2X0m9dl8EVdGdcuaxItbKptYEAWzG9/DxnMdlf9VPG/wAwCR6+87iSiLvFywsOQU93zsBAtwYRkrpewd315XFl/CavtbHr/Ds1rJTyKg3XK3Ci3Tf/AH9JZgcTUqUK7rpr3BwASpYsepYOT0mB2yWxKVES5Smumg1Ygtfx0y/3QPL2T7R4agpWr8QG9wVUMD63mcq9uKTg0sPRcFtC72G/kqnX5kTmFIazZuxtMNiLckdh4rY+1/KBtuHwzJlHG411uTpvPiTpMptx8lJELWZ7j+q1iVv10152HGWYIZtd9iSOdw5/AHyE8fa11JoqcwYFmFtLWyEEngLrAr2XtUPRZyCpDsqg/YsMjEcDYHTxmwbPrrSejRJ75Vyw46XJv6ec1jZhBJVRYBgTod7A5U8AguerdJkUAbF0sToEGFRnY/a7wy24E90/IwOZ9o6vfdeIqP6MVHoJg2M9m1a2etUbWzO7AcgzEj3niMD3YN7qRy/GXzw4VrNbnPaIEyRCRAdYpMJBgF5WTHJiGBF4SLwgQI4igxoDCSBCEBpKmLeSpgOzWVj0P6TDTNAA6TxYjZ7qufKSlyMw4W115bxAowtXK1507DYv4qCoNR/huR1UFGH+YCcrm59jNphAUY2GcAi+4PlW/gCCfEjnA3Ls02bCVUA76VKlNtNdXLqbciGPkZ49iUBTFZXHF3a/3VWqPlc+ku7MYhP4nEoDckpUGvFKhVvkMysel5V23xqU0qopGeoq5d18jD/EFvC/nA5cqWmU2FjTRrK41+sLf1KVPvMc0UNbXygdh2Q4ZBbguvTQi3m15hNq40VqmYHur3CTzU5lNuIBI8hMJsPtKEqBH0Rzqx4H+XwW+/8ASZbF4UXdqRV0a5YA99HYGyuvBdVIbp0gZDDVs1sgJ1Fjv+sQGdmGm69gLzT9rdoB8FsPSGVSdTpqvDXyHgPGZXaG21o0DTQhnykEqdBwJ04L7gdTNBdrm8BSYQhAeibMPGZBTMYJkEaBaZEAYQJEgmSBIaBF4jGF4pMAuYRbwgODJWKsZYEyVMkiRAm0lYSQIFizfOwVJXSop1ysrW37wR+E0RNJuv0d4jLUqLzQH/Kf90DB9vdjCjULrTyozfWUWU3F7abjNQpmdh+kHDrUw7HKSVva1tDzN9fKcaEDObK2q9GqKyHvDnqCD9ZSOKndLNvbX/iKwdQy90AqbHL0DX7y+Mwyv1l14DPaUOY7mVloCMxh8Vr3ub84rNeLALwhAQCenD4F3+qpPW1h5mbx2N2NQqUlqNTDNqDfXUHkdJtNLAC+igAdIGg/8OrSw71amrhTlHBTa27ideMwKGb725fLh2UcSo/9h+U58jQPTeF5WWkZoF14rGKGgYCmLeMYhgLeEmEB1MsDShY4gW3gIsBAskrK7xlgXrN1+jrBF6lV+CoF+bG4/wBBmkoZ136MsCFwrORrUdiOdl7g9m84GO21gTWQpnZWUnUEi4txtwnMNt7Jag3EqdL8jxB953utswHMRvvpOddvcLkQJpd3HpqT5AwOZiWBorLY2iwGzHnFvCEAhCEAhCEDo/0dV/8ABZeTt7Kfxm7Z+6JzfsXUKUywO9zod24Cbts3FGrey2EDTPpBr/VXmxPkP1mmo03D6RcKVam53HMPYj2M0tDA9IMAYgMLwLQZN5UGjZoExZF4XgNCJeEAUx1MrWNAtvJDSsGMDAcNJUxBGUwLVM752UoBMJQUf+NSfmLn1JnAb6T6G2D/ANug5Io8lEC7EVMonH/pExp+KmuoDEDqSAPS86bj6up5CcQ7XYz4uIdr6A5V8F/Ut5QMICSbxwOnr+kRTLlcQKyt+B8ouU8jLg45yC45wKIAS3MI6OIFJUxZ6GaecwNy7EBqgemtrr3gOYO+3z950fYeCdQQR+nnOU9gsVkxtPk10PzGnqBO6YWwvA5h9K4I+EDzY+gnNxOk/S0+ZqZ5EjzB/Kc2gWBoXlYMLwLVMcSgGWBoDGLeSWikwCEXNCA6mODKxGBgWXheLeSDAsjLKwY6GBcguQOennPoTZpy0wOSgek4BgVzVEHN0Hmwne6NS1O/SBq/bDaJp0qjjeBYeLaD1M5HjSQAvC1z9431ueM3btrtHOwpDdmLt4Loo8zf5Tn+Ics1ybmBTPZg8hPet8544QN1wuxqVS2WmrA2uc4AHW62lW18Fs+kmUMzVeIpvmUdLm4M1/B0a1UZKYOXiAbA+J4z3JsOvT1Zkp3O9mBJ8FAJPygYiqgv3VYD7xv6gCTWwzLYNoSL2421tfymerUUoEPWZnfeKbDKSeBKb1H9VjyBmCxWLZ2LsdSb/p4QF+B19JU6WjZmMVr8YHr2RVK16TDhUT/ULz6GQ90HmAZ8303INxwN/LdPoDZ+MzYZGO/IL+UDnf0nVe8i/eJ8h/umgTaO3mJz4i32V9z+gmrwCEIQARlMWSDAa8iEIBb96QkQgMI6ysNGDwLLQET4g6yfiDrAsUR1lPxhyMYVxyMDM9nqWfE0V++p8tfwnbcW2SlfkJw3s7tZKGISq4ZlS5str3sQN5A4zddtfSNh6tJkSnWVipALBQAbaahyYGlbUx4ao76Es1lFz9VSQD53mEY+Hyk1Kl7dAB5C0SARwBxPlEkg2gZbAYz4YuXZRyQBnPzPdX36R6u3mF/gr8MnQ1Ll6zeNVtV8FCyk7SUkXphBxyBR8xmUn1i161Jho9S/JqdMjzDD2geAte5OpPE9eMABbU+ki/h5RbwHv4+0QmEIADO2bJrf8ojNp3B7Tic3b/jRf4f4QRg+W1+7bd5wNY21ifiV6jcMxA8BoPaeCBMIBCEIBCEIDSIXheBMIt4QCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQP//Z',
    fullName: 'Olga G.',
    status: 'i am a boss too',
    location: {country: 'Poland', city: 'Gdansk'}
},
{
    id: 4,
        photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWYrT70RGaxAjBIxxrahgDD-plkbjUJFwDQ&usqp=CAU',
    followed: false,
    fullName: 'Dmitriy P.',
    status: 'i am a boss too',
    location: {country: 'Poland', city: 'Warsaw'}}
*/

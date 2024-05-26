import classes from './login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/loginstate';
import google_icon from '/google_icon.svg'
export default function Login() {
    const dispatch = useDispatch();

    const hideLogPage = () => {
        dispatch(loginActions.toogleshowPage())
    }
    const [Signupclicked, setSignupclicked] = useState(false);
    const clickSignUp = () => {
        setSignupclicked(true);
    }
    const clickLogin = () => {
        setSignupclicked(false);
    }
    return (
        <dialog open>
            <button className={classes.cancelbtn} onClick={hideLogPage}>X</button>
            < form action="" className={classes.dialog} >

                <a href=""><img src={google_icon} alt="" />Sign up / Log in with Google</a>
                <span>-OR-</span>
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' placeholder='john@example.com' required />
                <label htmlFor="pass">Password:</label>
                <input type="password" id='pass' placeholder='Must be atleast 6 characters ' required />
                {
                    Signupclicked ? <div className={classes.Name_div}>
                        <div>
                            <label htmlFor="first">First Name:</label>
                            <input type="text" id='first' placeholder='john' required />
                        </div>
                        <div>
                            <label htmlFor="last">Last Name:</label>
                            <input type="text" id='last' placeholder='Doe' required />
                        </div>
                    </div> : ''
                }
                {Signupclicked ? '' : <a href="">Forgot password ?</a>}
                <div>
                    <button type='Submit' onClick={clickLogin}>Login</button>
                    <button type='Submit' onClick={clickSignUp}>Sign-up</button>
                </div>
            </form >
        </dialog >

    )
}
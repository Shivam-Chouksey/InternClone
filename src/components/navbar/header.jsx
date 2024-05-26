import classes from './header.module.css'
import Login from '../login/login';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal'
// import { Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../store/loginstate';
import download1 from '/download1.jpg'

const internData = [
    ['Work from Home', 'Internships in Bangalore', 'Internships in Delhi', 'Internships in Hyderabad',
        'Internships in Mumbai', 'Internships in Channai', 'Internships in Gurgaon', 'Internships in Kolkata']
    ,
    ['Computer Science Internships', 'Marketing Internships', 'Finance Internships', 'Graphic Design Internships',
        'Architecture Internships', 'Mechanical Internships', 'Digital Marketing', 'View all internships']
    ,
    ['Full Stack Development', 'Data Science', 'Human Resourse Management', 'Digital Marketing', 'Produc Management',
        'UI/UX Design', 'Electric Vehicle']

]
// const jobsData = [['Work from home', 'Jobs in Delhi', 'Jobs in Mumbai', 'Jobs in Bangalore', 'Jobs in Hyderabad',
//     'Jobs in Kolkata', 'Jobs in Chennai', 'Jobs in Pune', 'View all jobs',],
// ['Fresher jobs', 'Marketing jobs', 'Content writing jobs', 'Computer science jobs', 'Finance jobs',
//     'HR jobs', 'Graphic design jobs', 'Data science jobs', 'View all jobs'],
// ['Full Stack Development', 'Data Sciense', 'Human Resourse Management', 'Digital Marketing', 'Produc Management',
//     'UI/UX Design', 'Electric Vehicle']]

function Header() {
    const dispatch = useDispatch();
    const showloginPage = useSelector(state => state.loginPageState.loginPage)
    const showlogPage = () => {
        dispatch(loginActions.toogleshowPage())
    }
    const [Daata, setDaata] = useState(internData[0])
    const hoveringOnProfile = () => {
        setDaata(() => {
            return internData[1];
        })
    }
    const hoveringOnLocation = () => {
        setDaata(() => {
            return internData[0];
        })
    }
    const hoveringOnCourses = () => {
        setDaata(() => {
            return internData[2];
        })
    }
    const mouseLeave = () => {
        setDaata(() => internData[0])
    }

    const [sideBar, setSideBar] = useState(false);
    const toggle = () => {
        setSideBar((i) => !i);
    }

    return (
        <>
            {showloginPage ?<Login />:'' }
            {sideBar && <Modal>
                <div className={classes.sidebar}>
                    <ul className={classes.sidebarUl}>
                        <li><a href="">Internships</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Courses <span>OFFER</span></a></li>
                        <li><Link to='/Placement Courses'>Placement Guarantee Courses</Link></li>
                        <li><a href="">Contact Us</a></li><hr />
                        <li><a href="">Register-As a Student</a></li>
                        <li><a href="">Register-As a Employer</a></li>
                        <li><a href="">Login</a></li>
                        <button onClick={toggle}>Close</button>
                    </ul>
                </div>
            </Modal>}    
            <nav className={classes.header}>
                <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="40" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <div className={classes.left_div}>
                    <div className={classes.logo_div}>
                        <Link to='/'><img src={download1} /></Link>
                    </div>
                    <div className={classes.left_li}>
                        <ul>
                            <motion.li id={classes.hoverIntern} onMouseLeave={mouseLeave}  ><a href="">Internships
                                <motion.svg xmlns="http://www.w3.org/2000/svg" className='svg1' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </motion.svg>
                                <div className={classes.dialog}>
                                    <ul className={classes.dialogul1}>
                                        <li onMouseEnter={hoveringOnLocation}><a href="">Top Locations</a></li>
                                        <li onMouseEnter={hoveringOnProfile} ><a href="" >Profile</a></li>
                                        <li onMouseOver={hoveringOnCourses} ><a href="">Placement Gauranteed Courses</a></li>
                                    </ul>
                                    <ul className={classes.dialogul2}>
                                        {Daata.map((i) => <li key={i.id}>{i}</li>)}
                                    </ul>
                                </div ></a>
                            </motion.li>
                            <li><a href="">Jobs <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg></a></li>
                            <li><Link to='/Placement Courses' >Courses <span>80%OFF</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg></Link></li>
                        </ul>
                    </div>
                </div>
                <div className={classes.right_div}>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>Search</a>
                    <div className={classes.loginbtn} ><button onClick={showlogPage} >Login</button></div>
                    <button>Register</button>
                    <div className={classes.talent}><a href="">Hire talent</a></div>
                </div>
            </nav>
            {/* {a ? <div className={classes.dialog}>
                <ul className={classes.dialogul1}>
                    <li><a href="">Top Locations</a></li>
                    <li onMouseOver={hoveringOnProfile} onMouseLeave={MouseLeave}><a href="" >Profile</a></li>
                    <li onMouseOver={hoveringOnCourses} onMouseLeave={MouseLeave}><a href="">Placement Gauranteed Courses</a></li>
                </ul>
                <ul className={classes.dialogul2}>
                    {Daata.map((i) => <li key={i.id}>{i}</li>)}
                </ul>
            </div > : ''} */}

        </>

    )
}

export default Header;


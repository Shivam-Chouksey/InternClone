import Header from '../navbar/header';
import Adv from '../main/Adv';
import Courses from '../main/courses/courses';
import Company from '../main/hiredCompany/company';
import Footer from '../footer/footer';
import { useState } from 'react';
import loginContext from '../context/context';

import Login from '../login/login';

export default function Layout() {

    //const logincontext = useContext(loginContext)
    const [loginShow, setLoginShow] = useState(false);

    const showLogin = () => {
        setLoginShow(true);
    }
    const hideLogin = () => {
        setLoginShow(false);
    }
    return (<>
        <loginContext.Provider value={loginShow}>
            {loginShow && <Login hideLogin={hideLogin} />}
            <Header showLogin={showLogin} />
            <Adv />
            <Courses />
            <Company />
            <Footer />
        </loginContext.Provider>
    </>)
}
import { FC } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';


//Components:


// Images:
import logo from '../logo.svg';

const Navigation: FC = () => {


    return (
        <BrowserRouter>
            <div className="main-layout">

                <nav>
                    <img src={logo} alt="Logo App" />
                    <ul>
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }: any) => isActive ? "nav-active" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }: any) => isActive ? "nav-active" : ""}>About</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/users"
                                className={({ isActive }: any) => isActive ? "nav-active" : ""}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/about' element={<h1>About Component</h1>} />
                    <Route path='/users' element={<h1>Users Component</h1>} />
                    <Route path='/home' element={<h1>Home Component</h1>} />

                    <Route path='/*' element={<Navigate to='/home' replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default Navigation;
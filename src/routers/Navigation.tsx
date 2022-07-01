import { FC, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

// Images:
import logo from '../logo.svg';

// Routes:
import { routes } from './routes';

const Navigation: FC = () => {


    return (
        <Suspense fallback={<span>Loading...</span>}> {/* Suspense permite mostrar algun componente mientras se hace la carga del modulo o del componente */}

            <BrowserRouter>
                <div className="main-layout">

                    <nav>
                        <img src={logo} alt="Logo App" />
                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={to}>
                                        <NavLink
                                            to={to}
                                            className={({ isActive }: any) => isActive ? "nav-active" : ""}>{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))
                        }
                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>

        </Suspense>
    )
}

export default Navigation;
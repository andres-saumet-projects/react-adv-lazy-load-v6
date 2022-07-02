import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

// Components:
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

const LazyLayout = () => {

    return (
        <div>
            <h1>Lazy Layout</h1>

            { /* Las rutas hijas iran aquí */}

            <ul>
                <li>
                    <NavLink to="lazypage1">LazyPage 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazypage2">LazyPage 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazypage3">LazyPage 3</NavLink>
                </li>
            </ul>


            <Routes>
                <Route path="lazypage1" element={<LazyPage1 />} />
                <Route path="lazypage2" element={<LazyPage2 />} />
                <Route path="lazypage3" element={<LazyPage3 />} />

                <Route path="*" element={<Navigate to="lazypage1" replace />} />
            </Routes>

        </div>
    )
}

export default LazyLayout;
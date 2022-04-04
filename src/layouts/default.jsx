import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '@views/Home.jsx'
import Login from '@views/Login.jsx'
import Profile from '@views/Profile.jsx'

/**
 * @description Authentication layer who check if the user is logged in.
 * @param {JSX} props Child component.
 * @returns {JSX} React component between RequireAuth. */
const RequireAuth = ({ children }) => {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" />
    }
    return children
}

export default () => (
    <div className="main xl:p-[24px_160px] 2xl:p-[24px_20vw]">
        <BrowserRouter basename="/Agora">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    }
                />
                <Route exact path="/login" element={<Login />} />
                <Route
                    exact
                    path="/profile"
                    element={
                        <RequireAuth>
                            <Profile />
                        </RequireAuth>
                    }
                />
            </Routes>
        </BrowserRouter>
    </div>
)

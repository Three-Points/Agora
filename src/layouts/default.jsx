import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@containerComponents/Navbar'
import Home from '@views/Home.jsx'
import Profile from '@views/Profile.jsx'

export default () => (
    <div className="main xl:p-[24px_160px] 2xl:p-[24px_20vw]">
        <BrowserRouter basename="/Agora">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    </div>
)

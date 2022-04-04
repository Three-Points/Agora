import { useState, useEffect } from 'react'

import Loader from '@baseComponents/Loader/index'
import Navbar from '@containerComponents/Navbar'
import Profile from '@containerComponents/Profile'

import { getProfile } from '@services/author.service'

export default () => {
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState(null)

    useEffect(async () => {
        if (!profile) {
            setProfile(await getProfile())
            setLoading(false)
        }
    }, [profile])

    return (
        <>
            <Navbar />
            {loading ? <Loader /> : <Profile profile={profile} />}
        </>
    )
}

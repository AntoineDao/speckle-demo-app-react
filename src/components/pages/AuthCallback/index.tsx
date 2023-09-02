import React, { useEffect } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/auth'

type Props = {}

const AuthCallback = ({ }: Props) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    const { exchangeAccessCode } = useAuth()

    useEffect(() => {
        if (searchParams.has("access_code")) {
            const accessCode = searchParams.get("access_code")!
            setSearchParams({})
            exchangeAccessCode(accessCode).then(() => {
                navigate('/')
            })
        }
    }, [searchParams, exchangeAccessCode, setSearchParams, navigate])

    return (
        <div>AuthCallback</div>
    )
}


export default AuthCallback
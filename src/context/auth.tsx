import React from 'react'
export const APP_NAME = 'SpeckleReactDemo'
export const TOKEN = `${APP_NAME}.AuthToken`
export const REFRESH_TOKEN = `${APP_NAME}.RefreshToken`
export const CHALLENGE = `${APP_NAME}.Challenge`

export const SERVER_URL = process.env.REACT_APP_SERVER_URL ?? 'https://speckle.xyz'
const SPECKLE_APP_ID = process.env.REACT_APP_APP_ID ?? '9397f1dfb2'
const SPECKLE_APP_SECRET = process.env.REACT_APP_APP_SECRET ?? '94217b3eee'

// Create an auth context
export const AuthContext = React.createContext({
    token: null as string | null,
    refreshToken: null as string | null,
    login: () => { },
    exchangeAccessCode: (accessCode: string) => Promise.resolve(),
    logOut: () => { }
})


// Create an auth provider
export const AuthProvider = ({ children }: any) => {

    // Get the token and refreshToken from localStorage
    const [token, setToken] = React.useState(localStorage.getItem(TOKEN))
    const [refreshToken, setRefreshToken] = React.useState(localStorage.getItem(REFRESH_TOKEN))

    // Create a login function that redirects to the Speckle server authentication page
    const login = () => {
        // Generate random challenge
        var challenge =
            Math.random()
                .toString(36)
                .substring(2, 15) +
            Math.random()
                .toString(36)
                .substring(2, 15)
        // Save challenge in localStorage
        localStorage.setItem(CHALLENGE, challenge)
        // Send user to auth page
        // @ts-ignore
        window.location = `${SERVER_URL}/authn/verify/${SPECKLE_APP_ID}/${challenge}`
    }

    // Create a logOut function that removes the token and refreshToken from localStorage
    const logOut = () => {
        localStorage.removeItem(TOKEN)
        localStorage.removeItem(REFRESH_TOKEN)
        setToken(null)
        setRefreshToken(null)
    }

    // Create an exchangeAccessCode function that exchanges the provided access code with a token/refreshToken pair, and saves them to local storage.
    const exchangeAccessCode = async (accessCode: string) => {
        var res = await fetch(`${SERVER_URL}/auth/token/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                accessCode: accessCode,
                appId: SPECKLE_APP_ID,
                appSecret: SPECKLE_APP_SECRET,
                challenge: localStorage.getItem(CHALLENGE)
            })
        })
        var data = await res.json()

        if (data.token) {
            // If retrieving the token was successful, remove challenge and set the new token and refresh token
            localStorage.removeItem(CHALLENGE)
            localStorage.setItem(TOKEN, data.token)
            localStorage.setItem(REFRESH_TOKEN, data.refreshToken)
            setToken(data.token)
            setRefreshToken(data.refreshToken)

        }
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                refreshToken,
                login,
                exchangeAccessCode,
                logOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


// Create a hook to use the auth context
export const useAuth = () => React.useContext(AuthContext)
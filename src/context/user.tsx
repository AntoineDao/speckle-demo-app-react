import React, { createContext, useContext, useMemo } from 'react'
import { useQuery, gql } from '@apollo/client';


type User = {
    id: string
    name: string
    email: string
    avatar: string
    bio: string
}


const GET_USER = gql`
query {
    activeUser{
      id
      email
      name
      bio
      avatar
    }
  }
`;

export const UserContext = createContext({
    user: null as User | null,
})

export const UserProvider = ({ children }: any) => {

    const { loading, error, data } = useQuery(GET_USER);

    const user = useMemo(() => {
        if (loading) return null
        if (error) return null
        if (!data || !data.activeUser) return null
        return data.activeUser
    }, [loading, error, data])

    return (
        <UserContext.Provider value={{
            user: user,
        }}>
            {children}
        </UserContext.Provider>
    )
}


export const useUser = () => useContext(UserContext)
import React from 'react'
import { useAuth } from '../../../context/auth'
import { Avatar, Button, Space, Typography } from 'antd'
import { useUser } from '../../../context/user';


type Props = {}

const AuthButton = ({ }: Props) => {
    const { token, login, logOut } = useAuth()
    const { user } = useUser()
    return (
        token ?
            (
                <Space>
                    <Avatar src={user?.avatar} />
                    <Button type='text' onClick={() => logOut()}>
                        <Typography.Title level={5} style={{ margin: 0, color: 'white' }}>
                            Log Out
                        </Typography.Title>
                    </Button>
                </Space>
            )
            :
            <Button type='text' onClick={() => login()}>
                <Typography.Title level={5} style={{ margin: 0, color: 'white' }}>
                    Log In
                </Typography.Title>
            </Button>
    )
}

export default AuthButton
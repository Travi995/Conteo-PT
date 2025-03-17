
import { useState } from "react"
import { tpDataUsersLogin, tpDataUsersRegister } from "../../types/tpDataUsers"

export const user = ()=>{
    const [dataRegister, setDataRegister] = useState<tpDataUsersRegister>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [dataLogin, setDataLogin] = useState<tpDataUsersLogin>({
        email: '',
        password: '',
    })

    return {
        dataRegister,
        setDataRegister,
        dataLogin,
        setDataLogin
    }
}
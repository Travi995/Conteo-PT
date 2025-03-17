import { useNavigate } from "react-router-dom"
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { user } from "../../hooks/users/users";
import { tpDataUsersRegister } from "../../types/tpDataUsers";


const Register = () => {
    const navigate = useNavigate()

    const handlerNavigate = (arg: string) => {
        navigate(arg)
    }

    const { dataRegister, setDataRegister } = user()
    

    const handlerChange = (key: keyof tpDataUsersRegister, arg: string) => {
        setDataRegister({ ...dataRegister, [key]: arg })
        console.log(dataRegister)
    }


    return <form className="bg-white w-4xl h-[30rem] rounded-xl flex items-center gap-4 justify-between">
        <div className="w-[50%] h-full flex flex-col justify-center items-center gap-4 bg-[#9EA0EB] rounded-xl rounded-br-[30%] rounded-tr-[30%] text-white">
            <h1 className="text-4xl">Hello, Welcome!</h1>
            <span>Do you have an account?</span>
            <Button label="Sing in" style={{backgroundColor: 'transparent', border: '1px solid white', color: 'white'}} className="w-40" onClick={() => handlerNavigate('/login')}/>
        </div>

        <section className='flex flex-col w-[50%] gap-6 p-10 justify-center items-center'>
            <h1 className="text-3xl font-bold w-[15rem] text-center">Sing up</h1>
            <div className="w-full">
                <InputText className='w-full p-2 border-2 border-gray-200 text-gray-500 rounded-lg' keyfilter="alpha" placeholder='Name' onChange={(e)=>handlerChange('name',e.target.value)}/>
            </div>
            <div className="w-full">
                <InputText className='w-full p-2 border-2 border-gray-200 text-gray-500 rounded-lg' keyfilter="email" placeholder='Email' onChange={(e)=>handlerChange('email',e.target.value)}/>
            </div>
            <div className="w-full flex">
                <Password feedback={false} className="flex items-center flex-1 [&>*]:flex-1  " toggleMask inputClassName="w-full p-2 flex-1" placeholder="Password" onChange={(e)=>handlerChange('password',e.target.value)}/>
            </div>
            <div className="w-full flex">
                <Password feedback={false} className="flex items-center flex-1 [&>*]:flex-1  " toggleMask inputClassName="w-full p-2 flex-1" placeholder="Confirm your password" onChange={(e)=>handlerChange('confirmPassword',e.target.value)}/>
            </div>
            <Button label="Sing up" style={{backgroundColor: '#9EA0EB', border: 'none'}} className="w-40" />
        </section>





    </form>
}

export default Register
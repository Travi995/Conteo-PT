import { Outlet } from "react-router-dom"



const Auth = () => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-[#d2d3f7]">
            <Outlet/>
        </div>
    )
}

export default Auth
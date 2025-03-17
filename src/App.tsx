import { Route, Routes } from "react-router-dom"
import Auth from "./views/auth/auth"
import Login from "./views/login/login"
import Register from "./views/register/register"


const App = () => {
  return <div className="h-screen w-screen bg-slate-900">
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </div>
}

export default App
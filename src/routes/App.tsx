import { HashRouter, Routes, Route } from "react-router-dom"

import { Layout } from "../containers/Layout"
import { ChangePassword } from "../pages/ChangePassword"
import { RecoveryPassword } from "../pages/RecoveryPassword"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { MyAccount } from "../pages/MyAccount"
import { CreateAccount } from "../pages/CreateAccount"
import { Orders } from "../pages/Orders"
import { NotFound } from "../pages/NotFound"
import "../styles/globals.css"

function App() {

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
          <Route path="/create-account" element={<CreateAccount/>}/>
          <Route path="/change-password" element={<ChangePassword/>}/>
          <Route path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App

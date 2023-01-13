import { HashRouter, Routes, Route } from "react-router-dom"

import { Layout } from "../containers/Layout"
import { Login } from "../containers/Login"
import { RecoveryPassword } from "../containers/RecoveryPassword"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import "../styles/globals.css"

function App() {

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App

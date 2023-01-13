import { HashRouter, Routes, Route } from "react-router-dom"

import { Layout } from "../containers/Layout"
import { Login } from "../containers/Login"
import { RecoveryPassword } from "../containers/RecoveryPassword"
import "../styles/globals.css"

function App() {

  return (
    <HashRouter>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/recovery-password" element={<RecoveryPassword/>}/>
          {/* <Route path="*" element={<NotFount/>}/> */}
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App

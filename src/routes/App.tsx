import { HashRouter, Routes, Route } from "react-router-dom"

import { Layout } from "../containers/Layout"
import { Login } from "../containers/Login"
import "./styles/globals.css"

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <Login/>
            </Layout>
          }/>
      </Routes>
    </HashRouter>
  )
}

export default App

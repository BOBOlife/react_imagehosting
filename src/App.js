import './App.css'
import React, {Suspense, lazy} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Switch, Route} from 'react-router-dom'
import Loading from './components/Loading'
import 'antd/dist/antd.css'
import styled from 'styled-components'

const Home = lazy(() => import(`./pages/Home`))
const History = lazy(() => import(`./pages/History`))
const About = lazy(() => import(`./pages/About`))
const Login = lazy(() => import(`./pages/Login`))
const Register = lazy(() => import(`./pages/Register`))
const Main = styled.main`
  background: #eceff2;
`
function App() {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" exact component={History} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Suspense>
      </Main>
      <Footer />
    </>
  )
}

export default App

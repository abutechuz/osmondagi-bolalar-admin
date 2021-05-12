import React from 'react'
import {client} from './utils/api-client'
import './App.scss'
import AuthenticatedApp from './AuthenticatedApp.js'
import UnAuthenticatedApp from './UnAuthenticatedApp.js'
import useToken from './hooks/useToken'

function App() {
  
    const [token, setToken] = useToken()
 

 React.useEffect(()=>{
    client('verify', {data: {token}}).then(data=> {
        if(data.status === 403){
            setToken(false)
        } 
    
    })

 }, [token])


    if (token) {
        return <AuthenticatedApp />
    } else {
        return <UnAuthenticatedApp />
    }
}

export default App

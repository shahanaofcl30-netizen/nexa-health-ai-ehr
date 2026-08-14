import React, { createContext, useContext, useEffect, useState } from 'react'
import { getUser as getStoredUser, saveUser, clearUser as clearStoredUser } from '../services/authService'

const AuthContext = createContext()

export function AuthProvider({children}){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    setUser(getStoredUser())
  },[])

  function setAuthUser(u){
    if(u) saveUser(u)
    else clearStoredUser()
    setUser(u)
  }

  return <AuthContext.Provider value={{user, setAuthUser}}>{children}</AuthContext.Provider>
}

export function useAuth(){
  return useContext(AuthContext)
}

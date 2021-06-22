import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import parseJwt from './JWTdecoder'

// Checks if token is valid and not expired 
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Get and parse token 
  const token = localStorage.getItem('token')
  // const decoded = parseJwt(token)
  // let user_type
  // let exp
  // if(decoded){
  //    user_type = decoded.type
  //    exp = decoded.exp
  // }

  // if (token && Date.now() >= exp * 1000) {
  //   localStorage.setItem('sessionExpired', true)
  // }

  return (
    <Route
      {...rest}
      render={props => {
        // if (token && user_type === 'user' && Date.now() <= exp * 1000) {
        //   return <Component {...props} />
        // }
        if (token) {
          return <Component {...props} />
        }
        return <Redirect to="/login" />             
      }}
    />
  )
}

export default PrivateRoute

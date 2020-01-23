import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../store/userContext/UserContext';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <UserContext.Consumer>{ ({ user: { isAuth } }) => {
      return (
        <Route
          {...rest}
          render = { props => (
            isAuth ? <Component {...props} /> : <Redirect to ='/signin' />
          )}
        />
      )
    }}</UserContext.Consumer>
  )
}

export default ProtectedRoute;
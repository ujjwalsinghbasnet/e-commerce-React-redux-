import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.user.user)

  return (
    <Route {...rest} render={
      props => {
          if(user.length !==0){
            return <Component {...rest} {...props} />
          }else {
          return <Redirect to={
              {
                pathname: '/signin',
                state: {
                    from: props.location
                }
              }
          } />
      }
    }
    } />
  )
}

export default ProtectedRoute;
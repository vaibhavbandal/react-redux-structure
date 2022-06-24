import React from 'react'
import UserComp1 from './components/UserComp1'
import UserComp2 from './components/UserComp2'
import {Link} from 'react-router-dom';


const UserPageContainer = () => {
  return (
    <>
         
          
            <div>UserPageContainer</div>
            <UserComp1/>
            <UserComp2/>
    </>
  )
}

export default UserPageContainer;
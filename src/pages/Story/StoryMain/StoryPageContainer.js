import React from 'react'
import { Link } from 'react-router-dom'
import StoryTopicRoutes from '../../../routes/StoryTopicRoutes'

const StoryPageContainer = () => {
  return (
    <>
      <ul>
        <li> <Link to='story-react'>story-React</Link> </li>
        <li> <Link to='story-javascript'>story-JavaScript</Link> </li>
      </ul>
      <div>StoryPageContainer</div>
      <StoryTopicRoutes/>
      
      
    </>
  )
}

export default StoryPageContainer
import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

interface HomeProps {
  currentUser?: object | null,
}
const Home = ({currentUser}: HomeProps) => {
  if (!currentUser) {
    return (
      <div className="border-2 inline p-2 m-1 rounded-md">
        <Link to="/sign_in" className="text-blue-400 pl-1">
          Sign In
        </Link>
        <Link to="/sign_up" className="text-blue-40 pl-1">
          Sign Up
        </Link>
      </div>
    )
  } else {
    return (
      <Logout />
    )
  }
}

export default Home
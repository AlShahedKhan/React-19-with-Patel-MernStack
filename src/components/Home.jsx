import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
            <Link to="/" className="text-lg font-bold">Home</Link>
            <Link to="/about" className="text-lg font-bold">About</Link>
            <Link to="/todo" className="text-lg font-bold">Todo</Link>
        </nav>
    </div>
  )
}

export default Home
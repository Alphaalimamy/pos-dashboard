import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div >
        <p>
            <Link to="/product">Go to Dashboard</Link>
        </p>
    </div>
  )
}

export default Dashboard
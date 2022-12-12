import React from 'react'
import { NavLink,   } from 'react-router-dom'
export default function AdminMenu() {
  return (
    <div className="admin_menu">
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink  to={`add-experience`}>Add Experience</NavLink>
                </li>
                <li>
                    <NavLink  to={`add-portfolio`}>Add Portfolio</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

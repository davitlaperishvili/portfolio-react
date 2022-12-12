import React from 'react'
import Menu from '../Menu/Menu'
import SidebarInfo from '../SidebarInfo/SidebarInfo'
import "./sidebar.scss"

export default function Sidebar() {
    return (
        <div className='sidebar_wrap'>
            <SidebarInfo/>
            <Menu/>
        </div>
    )
}

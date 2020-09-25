import React from "react"
import "./ToolBar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from  "../NavigationItems/NavigationItems"

const ToolBar=props=>(
    <header className="ToolBar">
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default ToolBar;
import React from "react"
import "./ToolBar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from  "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const ToolBar=props=>(
    <header className="ToolBar">
       <DrawerToggle  clicked={props.drawerToggleClicked}/>
        <Logo />
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
)

export default ToolBar;